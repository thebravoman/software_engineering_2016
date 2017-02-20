class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    comment_json = JSON.parse(request.raw_post)

    @current = Comment.create(comment_json)
    hash = {
              id: @current.id,
              article_id: @current.article_id,
              content: @current.content
            }
    render :json => hash, content_type: "application/json"
  end

  def show
    comment_id = params[:id]

    if Comment.exists?(comment_id)
      @current = Comment.find(comment_id)
      hash = {
                id: @current.id,
                article_id: @current.article_id,
                content: @current.content
              }
      render :json => hash, content_type: "application/json"
    else
      render :json => {}, content_type: "application/json"
    end

  end

  def index
    #not sure if sorting works well - first puts capital letters; created_at da se slaga li??
    # render :json => Comment.all().sort_by{|c| c.content}.to_json

    output_json = Array.new
    all =  Comment.all().sort_by{|c| c.content}

    all.each do |c|
      output_json <<  {
                        id: c.id,
                        article_id: c.article_id,
                        content: c.content
                      }
    end
    render :json => output_json, content_type: "application/json"
  end

end
