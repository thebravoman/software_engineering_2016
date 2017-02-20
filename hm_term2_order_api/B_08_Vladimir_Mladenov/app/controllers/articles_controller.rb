require 'date'

class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token, :only => :create


  # GET /articles
  # GET /articles.json
  def index
    if params[:order]
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
  # GET /articles/1.json
  def show
      if params[:order]
          get_score
          return
      end

      if set_article
          output_hash = {name: @article.name,
                         id: @article.id,
                         created_at: @article.created_at,
                         update_at: @article.updated_at}

          render :json => output_hash.to_json
      end
  end

  # POST /articles
  # POST /articles.json
  def create
    article_info = JSON.parse(request.raw_post)

    #for id in 1...Float::INFINITY
    #    if !Article.exists?(id)
    #        article_info[:id] = id
    #        break
    #    end
    #end

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
      vote_x = 0
      Vote.all.where("article_id = ?", params[:id]).each do |vote|
          vote_x += vote.value
      end
      vote_x = vote_x / Vote.all.where("article_id = ?", params[:id]).length

      vote_m = 0
      Vote.all.each do |vote|
          vote_m += vote.value
      end
      vote_m = vote_m / Vote.all.length

      vote_q = (vote_m - vote_x).abs

      vote_score = 1/((Math.sqrt(2*Math::PI)*vote_q)) * Math.exp(-0.5 * ((vote_x-vote_m)/vote_q ** 2))

      comment_x = Comment.all.where("article_id = ?", params[:id]).length
      comment_m = Comment.all.length / Article.all.length
      comment_q = (comment_m - comment_x).abs

      comment_score = 1/((Math.sqrt(2*Math::PI)*comment_q)) * Math.exp(-0.5 * ((comment_x-comment_m)/comment_q ** 2))

      set_article
      output_hash = {id: @article.id, name: @article.name,
                     comments_score: comment_score, votes_score: vote_score}
      render :json => output_hash.to_json
  end

  # GET /articles?order=normdist
  def sort_by_score
      articles = []

      Article.all.each do |article|
          vote_x = 0
          Vote.all.where("article_id = ?", article.id).each do |vote|
              vote_x += vote.value
          end
          vote_x = vote_x / Vote.all.where("article_id = ?", article.id).length

          vote_m = 0
          Vote.all.each do |vote|
              vote_m += vote.value
          end
          vote_m = vote_m / Vote.all.length

          vote_q = (vote_m - vote_x).abs

          vote_score = 1/((Math.sqrt(2*Math::PI)*vote_q)) * Math.exp(-0.5 * ((vote_x-vote_m)/vote_q ** 2))

          comment_x = Comment.all.where("article_id = ?", article.id).length
          comment_m = Comment.all.length / Article.all.length
          comment_q = (comment_m - comment_x).abs

          comment_score = 1/((Math.sqrt(2*Math::PI)*comment_q)) * Math.exp(-0.5 * ((comment_x-comment_m)/comment_q ** 2))

          articles << {name: article.name, id: article.id, total_score: comment_score + vote_score, created_at: article.created_at, updated_at: article.updated_at}
      end

      output_hash = articles.sort_by {|article| -article[:total_score]}
      render :json => output_hash.to_json
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
        if !Article.exists?(params[:id])
            render :text => "No such article"
            return false
        else
            @article = Article.find(params[:id])
            return true
        end
    end
end
