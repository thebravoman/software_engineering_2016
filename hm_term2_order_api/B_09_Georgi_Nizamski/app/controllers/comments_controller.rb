class CommentsController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		list = Array.new
		if params.has_key? :article_id
			Comment.where(article_id: params[:article_id]).each do |comment|
				list << comment.format			
			end
		else 		
			Comment.order(:content).each do |comment|
				list << comment.format
			end	
		end
		render json: list
	end

	def create
		@comment = Comment.new
		@comment.article_id = params[:article_id]
		@comment.content = params[:content]
		@comment.save
		
		render json: @comment.format
	end

	def show
		if Comment.exists?(params[:id])
			@comment = Comment.find(params[:id])
			render json: @comment.format
		end
	end
end
