require 'date'

class ArticlesController < ApplicationController
      before_action :article_check, only: [:show, :edit, :update, :destroy]
      skip_before_filter :verify_authenticity_token, :only => :create

      def article_check
        if !Article.exists?(params[:id])
            render :text => "Article missing"
            return false
        else
            @article = Article.find(params[:id])
            return true
        end
    end

    # GET /articles
   def index
    if params[:order] == "normdist"
        sort_by_score
        return
    end

    @articles = Article.all

    json_array = []
    @articles.each do |article|
        json_array << {name: article.name, id: article.id, created_at: article.created_at, update_at: article.updated_at}
    end
    output_hash = {articles: json_array.sort_by { |hash| hash[:name]}}
    render :json => output_hash.to_json
end

  # GET /articles/1
  def show
      if params[:order] == "normdist"
          get_score
          return
      end

      if article_check
          output_hash = {name: @article.name,
                         id: @article.id,
                         created_at: @article.created_at,
                         update_at: @article.updated_at}

          render :json => output_hash.to_json
      end
  end

  # POST /articles
  def create
    article_info = JSON.parse(request.raw_post)

    for id in 1...Float::INFINITY
        if !Article.exists?(id)
            article_info[:id] = id
            break
        end
    end

    @article = Article.new(article_info)
    @article.save
    output_hash = {name: @article.name,
                   id: @article.id,
                   created_at: @article.created_at,
                   update_at: @article.updated_at}
    render :json => output_hash.to_json
  end

  # GET /articles/:id/comments
  def get_comments
      comments_array = []
      Comment.all.where("article_id = ?", params[:id]).each do |comment|
          comments_array << {id: comment.id,
                             article_id: comment.article_id,
                             content: comment.content}
      end

      output_hash = {articles: comments_array.sort_by {|comment| comment[:content]}}
      render :json => output_hash.to_json
  end

  # GET /articles/:id?order=normdist
  def get_score
      vote_score = 0
      Vote.all.where("article_id = ?", params[:id]).each do |vote|
          vote_score += vote.value
      end

      comment_score = 0
      Comment.all.where("article_id = ?", params[:id]).each do |comment|
          comment_score += 1
      end

      article_check
      output_hash = {id: @article.id, name: @article.name,
                     comments_score: comment_score, votes_score: vote_score}
      render :json => output_hash.to_json
  end

  # GET /articles?order=normdist
  def sort_by_score
      articles = []

      Article.all.each do |article|
          vote_score = 0
          Vote.all.where("article_id = ?", article.id).each do |vote|
              vote_score += vote.value
          end

          comment_score = 0
          Comment.all.where("article_id = ?", article.id).each do |comment|
              comment_score += 1
          end

          article.total_score = vote_score + comment_score
          article.save
          articles << {id: article.id, name: article.name, created_at: article.created_at, update_at: article.updated_at, total_score: article.total_score}
      end

      output_hash = articles.sort_by {|article| -article[:total_score]}
      render :json => output_hash.to_json
  end

   
end
