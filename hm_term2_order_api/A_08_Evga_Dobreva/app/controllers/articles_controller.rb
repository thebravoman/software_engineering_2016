require 'date'

class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token, :only => :create

  def index
    if (params[:order]=="normdist")
        sort_by_score
        return
    end

    @articles=Article.all

    array_json=[]
    @articles.each do |article|
        array_json<<{name: article.name, id: article.id, created_at: article.created_at, update_at: article.updated_at}
    end
    hash_output={articles: array_json.sort_by { |hash| hash[:name]}}
    render :json => hash_output.to_json
  end

  def show
      if (params[:order]=="normdist")
          get_score
          return
      end

      if (set_article)
          hash_output={name: @article.name, id: @article.id, created_at: @article.created_at, update_at: @article.updated_at}
          render :json => hash_output.to_json
      end
  end

  def create
    article_info=JSON.parse(request.raw_post)

    for id in 1...Float::INFINITY
        if (!Article.exists?(id))
            article_info[:id]=id
            break
        end
    end

    @article=Article.new(article_info)
    @article.save
    hash_output={name: @article.name, id: @article.id, created_at: @article.created_at, update_at: @article.updated_at}
    render :json => hash_output.to_json
  end

  def get_comments
      array_comments=[]
      Comment.all.where("article_id = ?", params[:id]).each do |comment|
          array_comments<<{id: comment.id, article_id: comment.article_id, content: comment.content}
      end

      hash_output={articles: array_comments.sort_by {|comment| comment[:content]}}
      render :json => hash_output.to_json
  end

  def get_score
      vote_score=0
      Vote.all.where("article_id = ?", params[:id]).each do |vote|
          vote_score+=vote.value
      end

      comment_score=0
      Comment.all.where("article_id = ?", params[:id]).each do |comment|
          comment_score+=1
      end

      set_article
      hash_output={id: @article.id, name: @article.name, comments_score: comment_score, votes_score: vote_score}
      render :json => hash_output.to_json
  end

  def sort_by_score
      articles=[]

      Article.all.each do |article|
          vote_score=0
          Vote.all.where("article_id = ?", article.id).each do |vote|
              vote_score+=vote.value
          end

          comment_score=0
          Comment.all.where("article_id = ?", article.id).each do |comment|
              comment_score+=1
          end

          article.total_score=vote_score+comment_score
          article.save
          articles << {id: article.id, name: article.name, created_at: article.created_at, update_at: article.updated_at, total_score: article.total_score}
      end

      hash_output=articles.sort_by {|article| -article[:total_score]}
      render :json=>hash_output.to_json
  end


  private
    def set_article
        if (!Article.exists?(params[:id]))
            render :text => "No such article"
            return false
        else
            @article=Article.find(params[:id])
            return true
        end
    end
end
