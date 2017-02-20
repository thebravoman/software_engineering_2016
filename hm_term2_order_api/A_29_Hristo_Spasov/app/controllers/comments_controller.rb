class CommentsController < ApplicationController
	def create
		@comment = Comment.new
		@comment.article_id = params[:article_id]
		@comment.content = params[:content]
		@comment.save
		render json: {
			:id => @comment.id,
			:article_id => @comment.article_id,
			:content => @comment.content,
		}
	end

	def find
		@comment = Comment.find_by id: params[:id]
		if @comment == nil
			render json: {}
		else
			render json: {
				:id => @comment.id,
				:article_id => @comment.article_id,
				:content => @comment.content,
			}
		end
	end

	def all
		all_data = Comment.all.order(:content)
		render json: all_data
	end

	def from_article
		found_data = Comment.where(article_id: params[:id]).order(:content)
		render json: found_data
	end
end