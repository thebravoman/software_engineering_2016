require 'date'
class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token, :only => :create

  # GET /articles
  # GET /articles.json
  def index
    if params[:order]
      order
      return
    end
    
    @articles = Article.all
    json_array = []

    @articles.each do |article|
     json_array << {name: article.name, id:article.id, 
                                  created_at: article.created_at, updated_at: article.updated_at}
      end

    json_array = json_array.sort_by{ |hash| hash[:name]}
    output_hash = {articles: json_array}
    render :json => output_hash.to_json
end

  # GET /articles/1
  # GET /articles/1.json
  def show
      if params[:order]
        id_order
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

  # GET /articles/new
  def new
    @article = Article.new
  end

  # GET /articles/1/edit
  def edit
  end

  # POST /articles
  # POST /articles.json
  def create
    
    information = request.raw_post
    data_parsed = JSON.parse(information)

    article_info = {name: data_parsed["name"]}

    id = 1

    while id do
      if !Article.exists?(id)
        article_info[:id] = id
        break
      end
      id += 1
    end

    @article = Article.new(article_info)
  
    @article.save
    output_hash = {name: @article.name,
                   id: @article.id,
                   created_at: @article.created_at,
                   update_at: @article.updated_at}

    render :json => output_hash.to_json
    
  end

  # PATCH/PUT /articles/1
  # PATCH/PUT /articles/1.json
  def update
    respond_to do |format|
      if @article.update(article_params)
        format.html { redirect_to @article, notice: 'Article was successfully updated.' }
        format.json { render :show, status: :ok, location: @article }
      else
        format.html { render :edit }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article.destroy
    respond_to do |format|
      format.html { redirect_to articles_url, notice: 'Article was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def show_comments
    @comments = Comment.all
    filtered_comments = @comments.where("article_id=?", params[:id])
    article_comments = []
    filtered_comments.each do |comment|
      article_comments << {id:comment.id, 
                           article_id:comment.article_id,
                           content:comment.content }
    end 
    output_hash = {comments:article_comments.sort_by{|elem| elem[:content] }}
    render :json => output_hash.to_json
  end

  def id_order
    @votes = Vote.all
    filtered_votes = @votes.where("article_id=?", params[:id])
    votes_score = 0
    filtered_votes.each do |vote|
      votes_score += vote.value
    end 

    @comments = Comment.all
    filtered_comments = @comments.where("article_id=?", params[:id])
    comments_score = 0
    filtered_comments.each do |comment|
      comments_score += 1
    end 

    output_hash = {id: @article.id, 
                   name: @article.name,
                   comments_score: comments_score, 
                   votes_score: votes_score}
    render :json => output_hash.to_json
  end

  def order
    article_array = []
    @articles = Article.all
    @articles.each do |article|
      @votes = Vote.all
      filtered_votes = @votes.where("article_id=?", article.id)
      votes_score = 0
      filtered_votes.each do |vote|
        votes_score += vote.value
      end 

      @comments = Comment.all
      filtered_comments = @comments.where("article_id=?", article.id)
      comments_score = 0
      filtered_comments.each do |comment|
        comments_score += 1
      end 

      article.total_score = votes_score + comments_score
      article.save

      article_array << {id: article.id, 
                        name: article.name,
                        total_score: article.total_score,
                        created_at: article.created_at,
                        updated_at: article.updated_at}
    end

    article_array = article_array.sort_by{ |hash| -hash[:total_score]}

    output_hash = {articles:article_array}
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

    # Never trust parameters from the scary internet, only allow the white list through.
    def article_params
      params.require(:article).permit(:name, :id, :created_at, :updated_at)
    end
end