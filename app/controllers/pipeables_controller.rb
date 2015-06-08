class PipeablesController < ApplicationController
  before_action :set_pipeable, only: [:show, :edit, :update, :destroy]

  # GET /pipeables
  # GET /pipeables.json
  def index
    @pipeables = Pipeable.all
  end

  # GET /pipeables/1
  # GET /pipeables/1.json
  def show
  end

  # GET /pipeables/new
  def new
    @pipeable = Pipeable.new
  end

  # GET /pipeables/1/edit
  def edit
  end

  # POST /pipeables
  # POST /pipeables.json
  def create
    @pipeable = Pipeable.new(pipeable_params)

    respond_to do |format|
      if @pipeable.save
        format.html { redirect_to @pipeable, notice: 'Pipeable was successfully created.' }
        format.json { render :json => index, status: :created, location: @pipeable }
      else
        format.html { render :new }
        format.json { render json: @pipeable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pipeables/1
  # PATCH/PUT /pipeables/1.json
  def update
    respond_to do |format|
      if @pipeable.update(pipeable_params)
        format.html { redirect_to @pipeable, notice: 'Pipeable was successfully updated.' }
        format.json { render :show, status: :ok, location: @pipeable }
      else
        format.html { render :edit }
        format.json { render json: @pipeable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pipeables/1
  # DELETE /pipeables/1.json
  def destroy
    @pipeable.destroy
    respond_to do |format|
      format.html { redirect_to pipeables_url, notice: 'Pipeable was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pipeable
      @pipeable = Pipeable.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pipeable_params
      params.require(:pipeable).permit(:name, :description, :state)
    end
end
