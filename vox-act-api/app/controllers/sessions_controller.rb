class SessionsController < ApplicationController

  def create #login
    @user = User.find_by(params [:user][:email])
    binding.pry

    if @user && user.authenticate(params [:user][:password])
      token = encode_token(@user)

      render json:  (user: @user, token: token)
    else
      resp = {
        error: "Login not valid."
        details: @user.errors.full_messages
      }
      render json: resp, status: unauthroized
    end
  end

  def delete
  end
end
