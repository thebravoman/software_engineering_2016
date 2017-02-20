class VotesController < ApplicationController
	
	protect_from_forgery with: :null_session
	
	def create
		if Article.exists?(params[:article_id])
			@article = Article.find(params[:article_id])
			@vote = Vote.new
			@vote.article_id = params[:article_id]
			@vote.value = params[:value]
			@vote.save
			@final = @vote.as_json
			@final.delete("created_at")
			@final.delete("updated_at")
			render :json => @final
		end
	end
	
	def index
		@vote = Vote.order(:created_at)
		@final = @vote.as_json.each do |vote|
			vote.delete("created_at")
			vote.delete("updated_at")
		end
		render :json => @final
	end
	
	def show
		@vote = Vote.find(params[:id])
		@final = @vote.as_json
		@final.delete("created_at")
		@final.delete("updated_at")
		render :json => @final
	end
	
	def comments_count article
		count = 0
		comments = Comment.where(article_id: article)
		comments.each do |c|
			count += 1
		end
		return count
	end
	
	def all_comments
		counts = Hash.new
		articles = Article.all
		articles.each do |a|
			counts["#{a.id}"] = comments_count a.id
		end
		return counts
	end
end
