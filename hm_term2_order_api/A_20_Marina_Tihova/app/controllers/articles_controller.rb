require 'json'

class ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    article_json = JSON.parse(request.raw_post)

    @current = Article.create(article_json)
    render :json => @current.to_json, content_type: "application/json"
  end

  def show
    if params[:order] == "normdist"
      score
      return
    end

    article_id = params[:id]
    if Article.exists?(article_id)
      @current = Article.find(article_id)
      render :json => @current.to_json, content_type: "application/json"
    else
      render :json => {}, content_type: "application/json"
    end
  end

  def index
    if params[:order] == "normdist"
      sort_by_score
      return
    end

    render :json => Article.all().sort_by{|a| a.name}.to_json
  end

  def all_article_comments
    output_json = Array.new
    Comment.all.where("article_id = ?", params[:id]).each do |c|
      output_json << {
                        id: c.id,
                        article_id: c.article_id,
                        content: c.content
                      }
    end
    render :json => output_json.sort_by{|c| c[:content]}.to_json
  end


  def score
    hash = {
              id: params[:id],
              name: Article.find(params[:id]).name,
              comments_score: comments_score(params[:id]),
              votes_score: votes_score(params[:id])
            }
    render :json => hash, content_type: "application/json"
  end

  def sort_by_score
    articles = Array.new
    Article.all.each do |article|
      articles << {:article => article, :score => (comments_score(article.id) + votes_score(article.id))}
    end

    render :json => articles.sort_by{|a| -a[:score]}.map{|hash| hash[:article]}.to_json, content_type: "application/json"
  end

  private

  def comments_score(id)
    x = Comment.all.where("article_id = ?", id).length
    mean = Comment.all.length / Article.all.length
    std = (mean - x).abs

    score = 1/((Math.sqrt(2*Math::PI)*std))
    score * Math.exp(-0.5 * ((x-mean)/std ** 2))
  end

  def votes_score(id)
    votes = 0
    Vote.all.each do |v|
       votes += v[:value]
    end
    x = 0
    Vote.all.where("article_id = ?", id).each do |v|
      x += v.value
    end

    x = x / Vote.all.where("article_id = ?", id).length
    mean = votes / Vote.all.length
    std = (mean - x).abs

    score = 1/((Math.sqrt(2*Math::PI)*std))
    score * Math.exp(-0.5 * ((x-mean)/std ** 2))
  end

end
