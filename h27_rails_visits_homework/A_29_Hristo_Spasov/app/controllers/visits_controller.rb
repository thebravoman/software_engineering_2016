class VisitsController < ApplicationController
	def stats
		@visit = Visit.find_or_create_by!(:user => params[:user])
		if @visit.counter == nil
			render json: {:count => 0}
		else
			render json: {:count => @visit.counter}
		end
	end

	def create
		@visit = Visit.find_or_create_by!(:user => params[:user])
		if @visit.counter == nil
			@visit.counter = 0
		end

		@visit.counter = @visit.counter + 1
		@visit.save

		render json: {:count => @visit.counter}
	end
end
