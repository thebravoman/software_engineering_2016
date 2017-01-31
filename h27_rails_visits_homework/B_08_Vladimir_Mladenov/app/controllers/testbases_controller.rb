class TestbasesController < ApplicationController
  before_action :set_testbasis, only: [:show, :edit, :update, :destroy]

  # GET /testbases
  # GET /testbases.json
  def index
    @testbases = Testbase.all
  end

  # GET /testbases/1
  # GET /testbases/1.json
  def show
  end

  # GET /testbases/new
  def new
    @testbasis = Testbase.new
  end

  # GET /testbases/1/edit
  def edit
  end

  # POST /testbases
  # POST /testbases.json
  def create
    @testbasis = Testbase.new(testbasis_params)

    respond_to do |format|
      if @testbasis.save
        format.html { redirect_to @testbasis, notice: 'Testbase was successfully created.' }
        format.json { render :show, status: :created, location: @testbasis }
      else
        format.html { render :new }
        format.json { render json: @testbasis.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /testbases/1
  # PATCH/PUT /testbases/1.json
  def update
    respond_to do |format|
      if @testbasis.update(testbasis_params)
        format.html { redirect_to @testbasis, notice: 'Testbase was successfully updated.' }
        format.json { render :show, status: :ok, location: @testbasis }
      else
        format.html { render :edit }
        format.json { render json: @testbasis.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /testbases/1
  # DELETE /testbases/1.json
  def destroy
    @testbasis.destroy
    respond_to do |format|
      format.html { redirect_to testbases_url, notice: 'Testbase was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testbasis
      @testbasis = Testbase.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def testbasis_params
      params.require(:testbasis).permit(:name, :age)
    end
end
