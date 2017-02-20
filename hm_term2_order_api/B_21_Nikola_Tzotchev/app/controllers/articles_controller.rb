class ArticlesController < ApplicationController
	def index
		if !params[:order]
	    @artc = Article.order('name')
			@name_array = @artc
			render :json => @name_array.to_json
		else
			@artc_all = Article.all
			@artc_all.each do |f|
				nordmistcal(f.id)
			end
			@artc_all = Article.order('votes_score + comments_score')
			render :json => @artc_all.to_json(only:
		 [:id, :name, :votes_score, :comments_score])
		end
  end

	def create
		if Article.exists?(:name => params[:name])
			@artc = Article.find_by(:name => params[:name])
		else
			@artc = Article.new
			@artc.name = params[:name]
		end
		@artc.save
		@json_res = @artc
		render :json => @json_res.to_json(only:
	 [:id, :name, :created_at, :updated_at])
	end

	def nordmistcal(id)
			@artc = Article.find_by_id(id)
			min = Vote.minimum(:value)
			max = Vote.maximum(:value)
			@vote = Vote.where(:article_id => id)
			voterino = @vote.first == nil ? 0 : @vote.first.value
			allValues = Hash.new(0)
      @comments = Comment.all
      @comments.each do |c|
         allValues[c.article_id] += 1
      end
      highestC = allValues.values.max
      lowestC = allValues.values.min
			@articles = Article.all
      @articles.each do |a|
         cmCount = Comment.where(:article_id => a.id).count
         if cmCount == 0 then lowestC = 0 end
      end

			comments = Comment.where(:article_id => id).count
			@artc.comments_score =
			((comments.to_f - lowestC)/(highestC - lowestC)).round(3)
			@artc.votes_score = ((voterino.to_f - min)/(max-min)).round(3)
			@artc.save
	end

	def pasta
		if !params[:order]
			@artc = Article.find_by_id(params[:id])
			@json_res = @artc
				render :json => @json_res.to_json(only:
				[:id, :name, :created_at, :updated_at])
		else
			@rartc = Article.find_by_id(params[:id])
			nordmistcal(@rartc.id)
			@final = @rartc
			render :json => @final.to_json(only:
			[:id, :name, :votes_score, :comments_score])
		end
	end
	  skip_before_filter  :verify_authenticity_token
end
