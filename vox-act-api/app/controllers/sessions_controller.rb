class SessionsController < ApplicationController

  def create #login
    user = User.find_by(email: params[:user][:email])
    
    if user && user.authenticate(params[:user][:password])
      payload = {user_id: user.id}
      token = encode_token(payload)
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 2.hours.from_now}
      userObj = {
        id: user.id,
        username: user.user_name,
        email: user.email,
        password: user.password,
        token: token
      }
      render json: {user: userObj, token: token, status: 200}
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
    user = User.find(decode(token)["user_id"])

    render json: user
  end

  def destroy
    cookies.delete(:jwt)
  end
end
