class ArticlesController < ApplicationController
	protect_from_forgery with: :null_session
	
	def index
		if !params[:order] then
			@article = Article.order('name ASC')
			@final = @article.as_json.each do |article|
				article.delete("normdist")
				article.delete("comments_score")
				article.delete("votes_score")
			end
			render :json => @final
		else
			@article = Article.all
			@article = @article.each do |a|
				id = a.id
				a.normdist = comments_score["#{id}"] + votes_score["#{id}"]
				a.comments_score = comments_score["#{id}"]
				a.votes_score = votes_score["#{id}"]
				a.save
			end
			@article = Article.order('normdist')
			@final = @article.as_json.each do |article|
				#article.delete("normdist")
				article.delete("created_at")
				article.delete("updated_at")
			end
			render :json => @final
		end
	end
	
	def create
		if !Article.exists?(params[:name]) then
			@article = Article.new
			@article.name = params[:name]
			@article.save
			@final = @article.as_json
			@final.delete("normdist")
			@final.delete("votes_score")
			@final.delete("comments_score")
			render :json => @final
		end
	end
	
	def show
		if !params[:order] then
			@article = Article.find(params[:id])
			@final = @article.as_json
			@final.delete("normdist")
			@final.delete("comments_score")
			@final.delete("votes_score")
			render :json => @final
		else 
			@article = Article.find(params[:id])
			@article.normdist = comments_score["#{params[:id]}"] + votes_score["#{params[:id]}"]
			@article.comments_score = comments_score["#{params[:id]}"]
			@article.votes_score = votes_score["#{params[:id]}"]
			@article.save
			@final = @article.as_json
			@final.delete("created_at")
			@final.delete("updated_at")
			@final.delete("normdist")
			render :json => @final
		end
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
	
	def comments_score
		scores = Hash.new
		comments = all_comments
		comments = comments.sort_by{|k, v| v}.to_h
		down = comments.values.last != comments.values.first ? comments.values.last - comments.values.first : comments.values.last
		comments.each do |comment|
			scores["#{comment[0]}"] = comment[1] != comments.values.last ? (comment[1] - comments.values.first).to_f/down.to_f : 1
		end
		return scores
	end
	
	def votes_score_count article
		count = 0
		votes = Vote.where(article_id: article)
		votes.each do |v|
			count += v.value
		end
		return count
	end
	
	def all_votes
		counts = Hash.new
		articles = Article.all
		articles.each do |a|
			counts["#{a.id}"] = votes_score_count a.id
		end
		return counts
	end
	
	def votes_score
		scores = Hash.new
		votes = all_votes
		votes = votes.sort_by{|k, v| v}.to_h
		down = votes.values.last != votes.values.first ? votes.values.last - votes.values.first : votes.values.last
		votes.each do |vote|
			scores["#{vote[0]}"] = vote[1] != votes.values.last ? (vote[1] - votes.values.first).to_f/down.to_f : 1
		end
		return scores
	end
end
