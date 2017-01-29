class VisitsController < ApplicationController
	skip_before_filter :verify_authenticity_token	
	
	def index
		render html: "<h1>Count POST requests application on Rails<h1>".html_safe
	end
	
	#POST request
	def create
		if Visit.exists?(params[:user])
			@visits = Visit.find(params[:user])
			@visits.increment
		else 
			@visits = Visit.new
			@visits.id = params[:user]
			@visits.set_counter
		end
		@visits.save
	end

	#GET request
	def show
		@visits = Visit.find(params[:user])
		_result = Hash.new
		_result.merge!("count:" => @visits.visit_counter).to_json
		render json: _result
	end
	
end
