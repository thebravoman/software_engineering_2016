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

    json_array = json_array.sort_by{ |hash| hash[:content]}
    output_hash = {comments: json_array}
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

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
  	information = request.raw_post
    data_parsed = JSON.parse(information)

    comment_info = {article_id: data_parsed["article_id"], content: data_parsed["content"]}

    id = 1

    while id do
      if !Comment.exists?(id)
        comment_info[:id] = id
        break
      end
      id += 1
    end

    @comment = Comment.new(comment_info)
  
    @comment.save
    output_hash = {id: @comment.id,
                   article_id: @comment.article_id,
                   content: @comment.content}

    render :json => output_hash.to_json
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
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

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:comment_id, :article_id, :content)
    end
end
