class VotesController < ApplicationController

	def votes
		if Article.exists?(:id => params[:article_id])
			@vote = Vote.new
			@vote.article_id = params[:article_id]
			@vote.value = params[:value]
			@vote.save
			@json_res = @vote
			render :json => @json_res.to_json(only: [:article_id, :id, :value])
		end
	end

	def sort
		@vote = Vote.order('created_at')
		vote_array = @vote
		 render :json => vote_array.to_json(only: [:article_id, :id, :value])
	end
	  skip_before_filter  :verify_authenticity_token
end
