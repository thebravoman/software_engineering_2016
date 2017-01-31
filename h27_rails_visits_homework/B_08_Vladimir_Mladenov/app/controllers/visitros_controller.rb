class VisitrosController < ApplicationController
  before_action :set_visitro, only: [:show, :edit, :update, :destroy]

  # GET /visitros
  # GET /visitros.json
  def index
    @visitros = Visitro.all
  end

  # GET /visitros/1
  # GET /visitros/1.json
  def show
  end

  # GET /visitros/new
  def new
    @visitro = Visitro.new
  end

  # GET /visitros/1/edit
  def edit
  end

  # POST /visitros
  # POST /visitros.json
  def create
    @visitro = Visitro.new(visitro_params)

    respond_to do |format|
      if @visitro.save
        format.html { redirect_to @visitro, notice: 'Visitro was successfully created.' }
        format.json { render :show, status: :created, location: @visitro }
      else
        format.html { render :new }
        format.json { render json: @visitro.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visitros/1
  # PATCH/PUT /visitros/1.json
  def update
    respond_to do |format|
      if @visitro.update(visitro_params)
        format.html { redirect_to @visitro, notice: 'Visitro was successfully updated.' }
        format.json { render :show, status: :ok, location: @visitro }
      else
        format.html { render :edit }
        format.json { render json: @visitro.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visitros/1
  # DELETE /visitros/1.json
  def destroy
    @visitro.destroy
    respond_to do |format|
      format.html { redirect_to visitros_url, notice: 'Visitro was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visitro
      @visitro = Visitro.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visitro_params
      params.require(:visitro).permit(:user_id, :count)
    end
end
