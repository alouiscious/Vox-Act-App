class SessionsController < ApplicationController

  def create #login
    @user = User.find_by(params [:user][:email])

    if @user && user.authenticate(params [:user][:password])
      render json:  @user
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
