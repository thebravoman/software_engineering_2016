class CommentController < ArticleController
	def index
		if !params[:id]
			@comments = Comment.all.order(:content).as_json.each do |entry|
				entry.delete("created_at")
				entry.delete("updated_at")
			end
		
			render :json => @comments
			return
		end
		
		@comments = Comment.where(article_id: params[:id]).order(:content).as_json.each do |entry|
			entry.delete("created_at")
			entry.delete("updated_at")
		end
				
		render :json => @comments
		
	end
	
	def show
		@comment = Comment.find(params[:id])
		hash = @comment.as_json
		hash.delete("created_at")
		hash.delete("updated_at")
		
		render :json => hash
	end
	
	def create
		@comment = Comment.new
		@comment.article_id = params[:article_id]
		@comment.content = params[:content]
		@comment.save
		
		modify
		
		hash = @comment.as_json
		hash.delete("created_at")
		hash.delete("updated_at")
		
		render :json => hash
	end
	
	def modify
		@article = Article.find(params[:article_id])
		@article.comments_score += 1
		@article.save
	end
end
