require 'descriptive_statistics'

class ArticlesController < ApplicationController
	skip_before_action :verify_authenticity_token

	def welcome
		render html: "<h1>Article popularity calculation</h1>".html_safe	
	end

	def index
		list = Array.new
		if params.has_key? :order
			Article.all.each do |article|
				comment_score, votes_score, normaldist = calculate_normdist article.id
	
				article.update_attribute(:normdist, normaldist)
			 	article.update_attribute(:votes_score, votes_score)
			 	article.update_attribute(:comments_score, comment_score)		
			end

			Article.order(:normdist).each do |article|
				list << article.normdist_format			
			end
		else
			Article.order(:name).each do |article|
				list << article.format			
			end	
		end

		render json: list
	end

	def create
		@article = Article.new
		@article.name = params[:name]
		@article.save
		render json: @article.format
	end
	
	def show
		if Article.exists?(params[:id])
		   if params.has_key? :order
		     article = Article.find(params[:id])				

			 comment_score, votes_score, normaldist = calculate_normdist params[:id]
			 
			 article.update_attribute(:normdist, normaldist)
			 article.update_attribute(:votes_score, votes_score)
			 article.update_attribute(:comments_score, comment_score)

			 render json: article.normdist_format
		   else 
				@article = Article.find(params[:id])
		   		render json: @article.format
		   end			
		end
	end

	def calculate_normdist _id
		votes_score = calculate_votes_normdist _id
		comments_score = calculate_comments_normdist _id
		
		return [comments_score, votes_score, comments_score + votes_score] 
	end

	def calculate_comments_normdist _id
		comments = Comment.where(article_id: _id).count
		
		comments_score = normal_distribution comments, all_article_comments.values.mean, all_article_comments.values.standard_deviation

		return comments_score
	end

	def calculate_votes_normdist _id
		vote_value = calculate_vote_value _id
		
		votes_score = normal_distribution vote_value, all_article_votes.values.mean, all_article_votes.values.standard_deviation

		return votes_score    
	end

	def calculate_vote_value id
		votes_value = 0
		Vote.where(article_id: id).each do |vote|
			votes_value += vote.value		
		end
		return votes_value
	end

	def all_article_votes
		all_votes = Hash.new
		Vote.all.each do |vote|
			all_votes["#{vote.article_id}"] = calculate_vote_value vote.article_id
		end
		return all_votes
	end

	def get_comments
		return Comment.where(article_id: params[:id]).count		
	end

	def all_article_comments
		all_comments = Hash.new
		Comment.all.each do |comment|
			all_comments["#{comment.article_id}"] = Comment.where(article_id: comment.article_id).count
		end
		return all_comments
	end

	def normal_distribution number, mean, stddev
		normaldist = (1/ ((Math.sqrt(2 * Math::PI) * stddev))) * Math.exp(0.5 * ((number - mean) / stddev ** 2))
		return normaldist	
	end

private :get_comments,
		:all_article_comments,
		:all_article_votes,
		:calculate_vote_value,
		:calculate_votes_normdist,
		:calculate_comments_normdist,
		:calculate_normdist,
		:normal_distribution

end
