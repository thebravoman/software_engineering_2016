class VotesController < ApplicationController
skip_before_filter :verify_authenticity_token
	
	def create 
		@vote = Vote.new
		@vote.article_id = params[:article_id]
		@vote.value = params[:value]
		@vote.save

		render json: @vote,	
		:except => [:created_at, :updated_at]
	end

	def show 
		render json: Vote.order(:created_at),
		:except => [:created_at, :updated_at]
	end

end
