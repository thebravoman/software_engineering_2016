class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  def index
      @comments=Comment.all

      array_json=[]
      @comments.each do |comment|
          array_json<< {id: comment.id, article_id: comment.article_id, content: comment.content}
      end

      hash_output={comments: array_json.sort_by {|comment| comment[:content]}}
      render :json => hash_output.to_json
  end

  def show
      if (set_comment)
          hash_output={id: @comment.id, article_id: @comment.article_id, content: @comment.content}
          render :json => hash_output.to_json
      end
  end

  def create
      information=request.raw_post
      data_parsed=JSON.parse(information)

      comment_info={article_id: data_parsed["article_id"], content: data_parsed["content"]}

      for id in 1...Float::INFINITY
          if (!Comment.exists?(id))
              comment_info[:id]=id
              break
          end
      end


      @comment=Comment.new(comment_info)
      @comment.save
      hash_output={id: @comment.id, article_id: @comment.article_id, content: @comment.content}
      render :json => hash_output.to_json
  end

  private
    def set_comment
        if (!Comment.exists?(params[:id]))
            render :text => "No such comment"
            return false
        else
            @comment=Comment.find(params[:id])
            return true
        end
    end
end
