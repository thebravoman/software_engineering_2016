class CommentsController < ApplicationController

	skip_before_action :verify_authenticity_token
	
	def index
		arr = Comment.order(:content)
		arr = arr.as_json.each do |k|
				k.delete("created_at")
				k.delete("updated_at")
		end
		render :json => arr		
	
	end

	def create
		j = JSON.parse(request.raw_post)
		@comment = Comment.new
		@comment[:article_id] = j['article_id']
		@comment[:content] = j['content']
		@comment.save
		render :json =>
			{
				"id" => @comment[:id],
				"article_id" => @comment[:article_id],
				"content" => @comment[:content],

			}
	end

	def get_comment
		
	@comment = Comment.find_or_initialize_by(id: params[:id])


		if @comment.persisted?
			render :json =>
			{
				"id" => @comment[:id],
				"article_id" => @comment[:article_id],
				"content" => @comment[:content],
			}
			
		else
			render :json => {}
		end
	end

	def sort
		
		arr1 = []
		arr = Comment.order(:content)	
		arr.all.where("article_id = ?", params[:id]).each do |com|
          		arr1 << 
			{
				id: com[:id],
                        	article_id: com[:article_id],
                        	content: com[:content]
			}


		end
		render :json => arr1
	end
end
