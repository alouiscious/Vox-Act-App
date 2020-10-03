class TalentsController < ApplicationController
  before_action :set_talent, only: [:show, :update, :destroy]

  # GET /talents
  def index
    if logged_in?

      @talents = current_user.talents
      render json: @talents, status: :ok
    else
      render json: {
        error: 'not logged in', status: :unauthorized
      }
  end

  # GET /talents/1
  def show
    render json: @talent
  end

  # POST /talents
  def create
    @talent = Talent.new(talent_params)

    if @talent.save
      render json: @talent, status: :created, location: @talent
    else
      render json: @talent.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /talents/1
  def update
    if @talent.update(talent_params)
      render json: @talent
    else
      render json: @talent.errors, status: :unprocessable_entity
    end
  end

  # DELETE /talents/1
  def destroy
    @talent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_talent
      @talent = Talent.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def talent_params
      params.require(:talent).permit(:talent_style, :client_name, :client_id, :title, :media_URL, :mfid, :user_id)
    end
end
