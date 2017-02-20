class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
      @comments = Comment.all

      json_array = []
      @comments.each do |comment|
          json_array << {id: comment.id,
                         article_id: comment.article_id,
                         content: comment.content}
      end

      output_hash = {comments: json_array.sort_by {|comment| comment[:content]}}
      render :json => output_hash.to_json
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
      if set_comment
          output_hash = {id: @comment.id,
                         article_id: @comment.article_id,
                         content: @comment.content}

          render :json => output_hash.to_json
      end
  end

  # POST /comments
  # POST /comments.json
  def create
      information = request.raw_post
      data_parsed = JSON.parse(information)

      comment_info = {article_id: data_parsed["article_id"], content: data_parsed["content"]}

      for id in 1...Float::INFINITY
          if !Comment.exists?(id)
              comment_info[:id] = id
              break
          end
      end


      @comment = Comment.new(comment_info)
      @comment.save
      output_hash = {id: @comment.id,
                     article_id: @comment.article_id,
                     content: @comment.content}
      render :json => output_hash.to_json
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
        if !Comment.exists?(params[:id])
            render :text => "No such comment"
            return false
        else
            @comment = Comment.find(params[:id])
            return true
        end
    end
end
