class VisitsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def count
		if Visitor.exists?(params[:user])
			@visitor = Visitor.find(params[:user])
			@visitor.counter += 1
			@visitor.save
		else
			@visitor = Visitor.new
			@visitor.nut = params[:user]
			@visitor.counter = 1
			@visitor.save
		end

	end

	def show_user
		if Visitor.exists?(params[:user])
			@visitor = Visitor.find(params[:user])
			render :json => {"count" => @visitor.counter}, content_type: "application/json"
		else 
			render :json => {"count" => 0}, content_type: "application/json"
		end
	end
end
