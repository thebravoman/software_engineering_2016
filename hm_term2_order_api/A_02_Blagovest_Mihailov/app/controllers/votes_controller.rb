class VotesController < ApplicationController
	
	skip_before_action :verify_authenticity_token

	def index
		arr = Votw.order(:created_at)
		arr = arr.as_json.each do |k|
				k.delete("created_at")
				k.delete("updated_at")
		end
		render :json => arr		
	end

	def create
		j = JSON.parse(request.raw_post)
		@vote = Votw.new
		@vote[:article_id] = j['article_id']
		@vote[:value] = j['value']
		@vote.save
		render :json =>
			{
				"article_id" => @vote[:article_id],
				"value" => @vote[:value],
				"id" => @vote[:id]
			}
	end
end
