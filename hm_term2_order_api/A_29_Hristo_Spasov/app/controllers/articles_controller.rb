class ArticlesController < ApplicationController
	def create
		@article = Article.new
		@article.name = params[:name]
		@article.save
		render json: {
			:name => @article.name,
			:id => @article.id,
			:created_at => @article.created_at,
			:updated_at => @article.updated_at,
		}
	end

	def find
		@article = Article.find_by id: params[:id]
		if @article == nil
			render json: {}
		else
			render json: {
				:name => @article.name,
				:id => @article.id,
				:created_at => @article.created_at,
				:updated_at => @article.updated_at,
			}
		end
	end

	def all
		all_data = Article.all.order(:name)
		render json: all_data
	end

	def find_normdist
	end

	def all_sort
	end
end