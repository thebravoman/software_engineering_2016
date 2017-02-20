class ArticlesController < ApplicationController
skip_before_filter :verify_authenticity_token

	def create
		@article = Article.new
		@article.name = params[:name]
		@article.save
		render json: @article, 
		:except => [:comments_score, :votes_score, :general_score]
	end

	def show
		if params[:order] == "normdist" then
			calculate_comments_score
			calculate_votes_score
			calculate_general_scores
			render json: Article.order(:general_score), 
			:except => [:general_score, :created_at, :updated_at]
		else
			render json: Article.order(:name),
			:except => [:comments_score, :votes_score, :general_score]
		end
	end

	def show_by_id
		
		if params[:order] == "normdist" then
			calculate_comments_score
			calculate_votes_score
			calculate_general_scores
			@article = Article.find(params[:id])
			render json: @article, 
			:except => [:general_score, :created_at, :updated_at]
			
		else 
			@article = Article.find(params[:id])
			render json: @article, 
			:except => [:comments_score, :votes_score, :general_score]
		end
		
	end 

	
end
