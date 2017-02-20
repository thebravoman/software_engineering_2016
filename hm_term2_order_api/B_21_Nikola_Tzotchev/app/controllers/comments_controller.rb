class CommentsController < ApplicationController
	def list
    @comm = Comment.order('content')
		comm_array = @comm
		render :json => comm_array.to_json
  end

	def list_comm
		@comm = Comment.where(:article_id => params[:id])
		comm_array = @comm
		render :json => comm_array.to_json
	end
	def see
			@comm = Comment.find_by_id(params[:id])
			@json_res = @comm.to_json
			render :json => @json_res
	end
	def create
		if Article.exists?(:id => params[:article_id])
			@comm = Comment.new
			@comm.article_id = params[:article_id]
			@comm.content = params[:content]
			@comm.save
		else

		end
		@json_res = @comm
		render :json => @json_res.to_json
	end
	skip_before_filter  :verify_authenticity_token
end
