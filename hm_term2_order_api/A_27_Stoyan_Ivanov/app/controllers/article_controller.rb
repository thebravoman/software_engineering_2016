class ArticleController < ApplicationController
	def index
		@articles = Article.all
		if !params.key?("order")
			@articles = Article.order(:name).as_json.each do |entry|
				entry.delete("comments_score")
				entry.delete("votes_score")
				entry.delete("normdist")
			end
		elsif
			normdist
			@articles = Article.order(:normdist).as_json.each do |entry|
				entry.delete("updated_at")
				entry.delete("created_at")
				entry.delete("normdist")
			end
		end
		
		render :json => @articles	
	end
	
	def create
		@article = Article.new
		@article.name = params[:name]
		@article.save
		
		hash = @article.as_json
		hash.delete("comments_score")
		hash.delete("votes_score")
		hash.delete("normdist")
		
		render :json => hash
	end
	
	def show
	
		@article = Article.find(params[:id])
		hash = @article.as_json
			
		if  !params.key?("order")
			hash.delete("comments_score")
			hash.delete("votes_score")
			hash.delete("normdist")
		elsif
			hash.delete("created_at")
			hash.delete("updated_at")
			hash.delete("normdist")
		end
		render :json => hash
	end
	
	def findMinCommentScore
		return Article.all.as_json.min_by {|entry| entry["comments_score"]}["comments_score"]
	end
	
	def findMaxCommentScore
		return Article.all.as_json.max_by {|entry| entry["comments_score"]}["comments_score"]	
	end
	
	def findMinVoteScore
		return Article.all.as_json.min_by {|entry| entry["votes_score"]}["votes_score"]
	end
	
	def findMaxVoteScore
		return Article.all.as_json.max_by {|entry| entry["votes_score"]}["votes_score"]
	end
	
	def normdist
		Article.all.each do |entry|
			entry["normdist"] = (entry["comments_score"] - findMinCommentScore) / (findMaxCommentScore - findMinCommentScore) + (entry["votes_score"] - findMinVoteScore) / (findMaxVoteScore - findMinVoteScore)
		end
	end
end
