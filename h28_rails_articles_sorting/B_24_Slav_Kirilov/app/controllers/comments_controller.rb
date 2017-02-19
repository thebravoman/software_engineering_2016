class CommentsController < ApplicationController

	protect_from_forgery with: :null_session
	
	def create
		if Article.exists?(params[:article_id])
			@article = Article.find(params[:article_id])
			@comment = Comment.new
			@comment.article_id = params[:article_id]
			@comment.content = params[:content]
			@comment.save
			@final = @comment.as_json
			@final.delete("created_at")
			@final.delete("updated_at")
			render :json => @final
		end
	end
	
	def index
		if !params[:article_id] then
			@comment = Comment.order('content ASC')
			@final = @comment.as_json.each do |f|
				f.delete("created_at")
				f.delete("updated_at")
			end
			render :json => @final
		else 
			@comment = Comment.where(article_id: params[:article_id])
			@comment.order(:content)
			@final = @comment.as_json.each do |h|
				h.delete("created_at")
				h.delete("updated_at")
			end
			render :json => @final
		end
		
	end
	
	def show
		@comment = Comment.find(params[:id])
		@final = @comment.as_json
		@final.delete("created_at")
		@final.delete("updated_at")
		render :json => @final
	end
end
