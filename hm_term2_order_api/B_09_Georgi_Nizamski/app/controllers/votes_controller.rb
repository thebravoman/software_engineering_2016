class VotesController < ApplicationController
	skip_before_filter :verify_authenticity_token	
	def index
		list = Array.new
		Vote.order(:created_at).each do |vote|
			list << vote.format
		end
		render json: list
	end
	
	def create
		@vote = Vote.new
		@vote.article_id = params[:article_id]
		@vote.value = params[:value]
		@vote.save

		render json: @vote.format
	end
end
