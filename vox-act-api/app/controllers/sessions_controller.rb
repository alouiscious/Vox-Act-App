class SessionsController < ApplicationController

  def login #login
    user = User.find_by(email: params[:user][:email])
    
    if user && user.authenticate(params[:user][:password])
      payload = {id: user.id}
      # binding.pry
      token = encode_token(payload)
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 2.hours.from_now}
      userObj = {
        id: user.id,
        user_name: user.user_name,
        hometown: user.hometown,
        email: user.email,
        password: user.password,
        token: token
      }
      # render json: {user: userObj, token: token, status: 200}
      render json: {user: user, token: token, status: 200}
    else
      resp = {
        error: "Login or User not valid.",
        details: user.errors.full_messages
      }
      render json: resp, status: :unauthorized
    end
  end
  
  def token_auth
    puts current_user
    token = request.headers["Authenticate"]
    user = User.find_by(decode_token(token)["id"])
    render json: user
  end

  def destroy
    cookies.delete(:jwt)
  end
end
