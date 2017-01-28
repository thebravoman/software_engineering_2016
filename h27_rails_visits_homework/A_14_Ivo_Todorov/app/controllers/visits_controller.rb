class VisitsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
	end

	def show
		if(User.exists?(params[:user]))
			@user = User.find(params[:user])
			render :json => {"count" => @user.visits}, content_type: "application/json"
		else 
			render :json => {"count" => 0}, content_type: "application/json"
		end
	end

	def add
		@user
		if !User.exists?(params[:user])
			@user = User.new
			@user.number = params[:user]
			@user.id = params[:user]
			@user.visits = 0
		else
			@user = User.find(params[:user])
		end
		@user.add_visit
		@user.save
	end
end
