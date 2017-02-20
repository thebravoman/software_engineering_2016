class ArticlesController < ApplicationController
   def create
      @article = Article.new
      @article.name = params[:name]
      @article.save
      render :json => @article.as_json(:except => [:votes_score, :comments_score])
   end
   
   def getid
      if params[:order] then 
         normdist()
      else
         id = params[:id]
         @article = Article.find(id)
         render :json => @article.as_json(:except => [:votes_score, :comments_score])
      end
   end
   
   def getArticle
      if params[:order] then
         calculateNormDists()
         @article = Article.all.order('votes_score + comments_score')
         render :json => @article.as_json
      else
         @article = Article.all.order(:name)
         render :json => @article.as_json(:except => [:votes_score, :comments_score])
      end
      
   end
   
   def addComment
      @comment = Comment.new
      @comment.article_id = params[:article_id]
      @comment.content = params[:content]
      @comment.save
      render :json => @comment.as_json
   end
   
   def getComId
      id = params[:id]
      @comment = Comment.find(id)
      render :json => @comment.as_json
   end
   
   def getAllComs
      @comments = Comment.all.order(:content)
      render :json => @comments.as_json
   end
   
   def articleComms
      @comments = Comment.where(:article_id => params[:id]).order(:content)
      render :json => @comments.as_json
   end
   
   def votes
      @vote = Vote.new
      @vote.value = params[:value]
      @vote.article_id = params[:article_id]
      @vote.save
      render :json => @vote.as_json(:except => [:created_at, :updated_at])
   end
   
   def getVotes
      @votes = Vote.all.order(:created_at)
      render :json => @votes.as_json
   end
   
   def normdist
      calculateNormDists()
      @article = Article.find(params[:id])
      render :json => @article.as_json(:except => [:created_at, :updated_at])
   end
   
   def calculateNormDists
      highest = Vote.maximum(:value)
      lowest = Vote.minimum(:value)
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
      @articles.each do |a|
         votes = Vote.where(:article_id => a.id)
         comments = Comment.where(:article_id => a.id).count
         vv = votes.first == nil ? 0 : votes.first.value
         a.votes_score = ((vv - lowest)/(highest - lowest)).round(2)
         a.comments_score = ((comments.to_f - lowestC)/(highestC - lowestC)).round(2)
         a.save
      end
   end
   
   skip_before_filter :verify_authenticity_token
end
