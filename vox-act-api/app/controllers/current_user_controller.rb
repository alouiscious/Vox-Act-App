class CurrentUserController < ApplicationController
  before_action :authenticate_user, only: [:show, :index, :create]

  def index
    if logged_in?
      render json: current_user, status: 200
    else
      render json: {
        error: 'not logged in'
      },
      status: :unauthorized
    end
  end
  
end