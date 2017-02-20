class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  # GET /articles
  def index

    if params[:order] == 'normdist'
      result = Article.all.sort_by { |article| article.score }
    else
      result = Article.order('articles.name ASC')
    end

    render json: result
  end

  # GET /articles/1
  def show
    result = @article

    if params[:order] == 'normdist'
      result = @article.attributes.merge({:comments_score => @article.comments_score,
                                          :votes_sum => @article.votes_score})
    end
    render json: result
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_article
    @article = Article.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def article_params
    params.require(:article).permit(:name)
  end
end
