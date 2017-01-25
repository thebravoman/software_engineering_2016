class VisitorsController < ApplicationController
  def index
    @id = Visitor.all
  end

  def show
  	@id = Visitor.find(params[:user])
  end

  def create
  	if !Visitor.exists?(params[:user]) and !Visitor.exists?(params[:id])
  		@id = Visitor.new
  		@id.user = params[:user]
  		@id.id = params[:user]
  		@id.visit
  		@id.save
  	else
  		@id = Visitor.find(params[:user])
  		@id.visit
  		@id.save
  	end
  end
end
