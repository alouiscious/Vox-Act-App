class SessionsController < ApplicationController

  def create #login
    # binding.pry
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      # token = encode_token(@user)

      render json:  @user
      # render json:  (user: @user, token: token)
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
