class VisitsController < ApplicationController
	
	def index
		@data = Visit.all
		render :json => @data
	end
	
	def create 
		@visits = construct
		@visits.update
	end
	
	def show
		@visits = construct
		data = {"count" => @visits.count}
		render :json => data.to_json
	end
	
	def construct 
		if !Visit.exists?(user: params[:user]) 
			@visits = Visit.new
			@visits.user = params[:user]
			@visits.save
		end
		
		return Visit.find_by(user: params[:user])
	end
end
