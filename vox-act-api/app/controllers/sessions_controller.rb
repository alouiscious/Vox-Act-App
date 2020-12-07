class SessionsController < ApplicationController

  def create #login
    # binding.pry
    user = User.find_by(email: params[:user][:email])

    if user && user.authenticate(params[:user][:password])
      token = encode_token(id: user.id)
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 2.hours.from_now}
      # binding.pry
      # render json: UserSerializer.new(user, {token: token})
      userObj = {
        id: user.id,
        username: user.user_name,
        email: user.email,
        password: user.password,
        token: token
      }
      render json: userObj, status: 200
    else
      resp = {
        error: "Login not valid.",
        details: user.errors.full_messages
      }
      render json: resp, status: :unauthorized
    end
  end

  def destroy
    cookies.delete(:jwt)
  end
end
