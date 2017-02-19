class VoteController < CommentController
	def index
		@votes = Vote.order(:created_at).as_json.each do |entry|
			entry.delete("comments_score")
    		entry.delete("votes_score")
		 	entry.delete("created_at")
			entry.delete("updated_at")
		end
		
		render :json => @votes
	end
	
	def create
		@vote = Vote.new
		@vote.article_id = params[:article_id]
		@vote.value = params[:value]
		@vote.save
		
		modify
		
		hash = @vote.as_json
		hash.delete("comments_score")
    	hash.delete("votes_score")
    	hash.delete("created_at")
    	hash.delete("updated_at")

		render :json => hash
	end
	
	def modify
		@article = Article.find(params[:article_id])
		@article.votes_score += params[:value]
		@article.save
	end
end
