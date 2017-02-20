class ArticlesController < ApplicationController
	
	skip_before_action :verify_authenticity_token
	

	def index
		if params[:order] == "normdist"
			Article.all.each do |a|
				vote_score = 0
				comment_score = 0
				Votw.all.each do |v|
					if v[:article_id].to_i == a[:id].to_i
						vote_score += v[:value]
					end
				end
		

				Comment.all.each do |c|
					if c[:article_id].to_i == a[:id].to_i
						comment_score += 1
					end
				end
				puts vote_score + comment_score
				a[:score] = vote_score + comment_score
				a.save
			end
			arr = Article.order(:score)
			arr = arr.as_json.each do |k|
					k.delete("score")

			end
			render :json => arr
			
		else
			arr = Article.order(:name)
			arr = arr.as_json.each do |k|
					k.delete("score")
			end
			render :json => arr
		end
			

		

	end
	
	def create
		j = JSON.parse(request.raw_post)
		@article = Article.new
		@article[:name] = j['name']
		@article.save
		render :json =>
			{
				"name" => @article[:name],
				"id" => @article[:id],
				"created_at" => @article[:created_at],
				"updated_at" => @article[:updated_at]
			}
		
	end

	def get_article
		if params[:order] != "normdist"
			@article = Article.find_or_initialize_by(id: params[:id])


			if @article.persisted?
				render :json =>
				{
					"name" => @article[:name],
					"id" => @article[:id],
					"created_at" => @article[:created_at],
					"update_at" => @article[:updated_at]
				}
			
			else
				render :json => {}
			end
		else
			vote_score = 0
			comment_score = 0

			Votw.all.each do |v|
				if v[:article_id].to_i == params[:id].to_i
					vote_score += v[:value]
				end
			end
		

			Comment.all.each do |c|
				if c[:article_id].to_i == params[:id].to_i
					comment_score += 1
				end
			end
			@article = Article.find_or_initialize_by(id: params[:id])
			render :json =>
			{
				"id" => params[:id],
				"name" => @article[:name],
				"comments_score" => comment_score,
				"votes_score" => vote_score
			}
		end
			
	end



end
