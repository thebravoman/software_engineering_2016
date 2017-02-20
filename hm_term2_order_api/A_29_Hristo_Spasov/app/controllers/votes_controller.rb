class VotesController < ApplicationController
	def cast
		@vote = Vote.new
		@vote.article_id = params[:article_id]
		@vote.value = params[:value]
		@vote.save
		render json: {
			:article_id => @vote.article_id,
			:value => @vote.value,
			:id => @vote.id,
		}
	end

	def all
		all_data = Vote.all.order(:created_at)
		render json: all_data
	end
end
