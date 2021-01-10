class TalentsController < ApplicationController
  before_action :set_talent, only: [:show, :update, :destroy]

  # GET /talents
  def index
    if logged_in? && current_user
      # binding.pry
      @talents = current_user.talents
      render json: @talents, status: 200
    else
      render json: {
        error: 'not logged in'
      },
      status: :unauthorized
    end
  end

  # GET /talents/1
  def show
    render json: @talent, status: 200
  end

  # POST /talents
  def create
    # binding.pry
    @talent = current_user.talents.build(
      talent_style: params[:talent][:talent_style],  
      title: params[:talent][:title], 
      description: params[:talent][:description], 
      phmf: params[:talent][:phmf], 
      vimf: params[:talent][:vimf], 
      aumf: params[:talent][:aumf]
    )

    if @talent.save
      render json: @talent, status: :created
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

    # Only allow a trusted parameter "allowed list" through.
    def talent_params
      params.require(:talent).permit(:id, :talent_style, :title, :description, :phmf, :vimf, :aumf, :user_id)
    end
end

