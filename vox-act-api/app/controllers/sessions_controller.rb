class SessionsController < ApplicationController

  def login
    # binding.pry
    user = User.find_by(email: params[:user][:email])

    if user && user.authenticate(params[:user][:password])
      
      payload = {id: user.id}
      token = encode_token(payload)
      # token = encode_token(id: user.id)
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 2.hours.from_now}
      # binding.pry
      userObj = {
        id: user.id,
        username: user.user_name,
        email: user.email,
        password: user.password,
        token: token
      }
      render json: => {userObj, token: token, status: 200}
    else
      resp = {
        error: "Login or User not valid.",
        details: user.errors.full_messages
      }
      render json: resp, status: :unauthorized
    end
  end

  def token_auth
    token = request.headers["Authenticate"]
    user = User.find(decode(token)["id"])

    render json: user
  end

  def destroy
    cookies.delete(:jwt)
  end
end
