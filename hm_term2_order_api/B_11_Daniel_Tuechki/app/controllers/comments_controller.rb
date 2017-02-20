class CommentsController < ApplicationController
skip_before_filter :verify_authenticity_token
	
	def create
		@comment = Comment.new
		@comment.article_id = params[:article_id]
		@comment.content = params[:content]
		@comment.save		
		render json: @comment, 
		:except => [:created_at, :updated_at]
	end

	def show
		render json: Comment.order(:content), 
		:except => [:created_at, :updated_at]
	end 

	def show_by_id
		@comment = Comment.find(params[:id])
		render json: @comment, 
		:except => [:created_at, :updated_at]
	end

	def comments_for_article
		render json: Comment.where(article_id: params[:id]).order(:content), 
		:except => [:created_at, :updated_at]
	end
end
