class SessionsController < ApplicationController

  def create #login
    # binding.pry
    User.new(email: params[:user][:email], password: params[:user][:password])
    user = User.find_by(email: params[:user][:email])

    if user && user.authenticate(params[:user][:password])
      token = encode_token(upid: user.upid)
      # binding.pry
      # render json: UserSerializer.new(user, {token: token})
      userObj = {
        id: user.upid,
        username: user.user_name,
        email: user.email,
        password: user.password,
        token: token
      }
      # render json: @user
      render json: userObj, status: 200
    else
      resp = {
        error: "Login not valid.",
        details: user.errors.full_messages
      }
      render json: resp, status: unauthorized
    end
  end

  def delete
  end
end
