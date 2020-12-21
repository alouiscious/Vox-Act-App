class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    if logged_in? && current_user.user?
    # binding.pry
    @users = User.all
    render json: @users, status: 200
    end
  end
  
  # GET /users/1
  def show
    # user = Users.find(params["token"])
    render json: @user, status: 200
  end

  # POST /users
  def create
    # binding.pry
    @user = User.new(user_name: params[:user][:user_name], hometown: params[:user][:hometown], email: params[:user][:email], password: params[:user][:password], upid: params[:user][:upid], upph: params[:user][:upph])
    # @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      # binding.pry
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:id, :user_name, :hometown, :email, :password, :upid, :upph, :talent_id)
    end
end
