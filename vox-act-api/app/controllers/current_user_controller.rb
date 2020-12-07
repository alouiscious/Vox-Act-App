class CurrentUserController < ApplicationController
  before_action :authenticate_user, only: [:show]

end