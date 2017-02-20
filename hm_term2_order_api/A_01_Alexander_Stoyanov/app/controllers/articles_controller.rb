class ArticlesController < ApplicationController
  def index
    @articles = Article.order(:title).all
  end
  def show
  @article = Article.find(params[:id])
  end
  def new
  end
  def create
  render plain: params[:article].inspect
  render :json => {'id': Article.id, 'name': Article.title}
  end
  def create
  @article = Article.new(article_params)

  @article.save
  redirect_to @article
  end

  private
  def article_params
    params.require(:article).permit(:title, :text)
  end
end
