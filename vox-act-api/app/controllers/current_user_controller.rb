class CurrentUserController < ApplicationController
  before_action :authenticate_user, only: [:show, :index, :create]

end