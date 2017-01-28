class VisitsController < ApplicationController
  def index
    @vis = Visit.all
  end

  def show
    @vis = Visit.find(params[:user])
  end
  def create
    if Visit.exists?(params[:user])
      @vis = Visit.find(params[:user])
      @vis.visited += 1
    else
      @vis = Visit.new
      @vis.id = params[:user]
      @vis.user = params[:user]
      @vis.visited = 1
    end
    @vis.save
  end
  #protect_from_forgery with: :exception
  skip_before_filter  :verify_authenticity_token
end
