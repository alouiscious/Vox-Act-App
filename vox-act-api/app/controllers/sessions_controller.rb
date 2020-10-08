class SessionsController < ApplicationController

  def create #login
    # binding.pry
    User.new(email: params[:user][:email], password: params[:user][:password])
    user = User.find_by(email: params[:user][:email])

    if user && user.authenticate(params[:user][:password])
      token = encode_token(id: user.id)
      # binding.pry
      # render json: UserSerializer.new(user, {token: token})
      userObj = {
        id: user.id,
        username: user.username,
        email: user.email
        token: token
      }
      # render json: @user
      render json: userObj, status: 200
    else
      resp = {
        error: "Login not valid.",
        details: @user.errors.full_messages
      }
      render json: resp, status: unauthorized
    end
  end

  def delete
  end
end
