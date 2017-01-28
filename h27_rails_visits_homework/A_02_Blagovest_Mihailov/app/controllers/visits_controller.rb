class VisitsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
		@visit = Visit.find_or_initialize_by(:user => params[:user]) 
		if !@visit.persisted?
			render :json => {'count' => 0}
		else
			render :json => {'count' => @visit[:count]}
		end

  	end
	
	def create
		@visit = Visit.find_or_initialize_by(:user => params[:user]) 
		if !@visit.persisted?
			@add = Visit.new
      			@add[:user] = params[:user]
      			@add[:count] = 1
      			@add.save

		else
			@visit[:count] = @visit[:count] + 1
			@visit.save
		end
	end
end
