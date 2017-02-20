class ViditorsController < ApplicationController
	def create
			
			if Viditor.exists?(user: params[:user])
				@goshos = Viditor.find_by(user: params[:user])
			  @goshos.count += 1
				@goshos.save
			else
				@goshos = Viditor.new
				@goshos.user = params[:user]
				@goshos.count += 1
				@goshos.save
	
			end
	end
	def show
		@goshos=Viditor.find_by(user: params[:user])
		data = Hash.new
	 	data["count"] = @goshos.count 
 		json = data.to_json 
		render :json => json		
	end
skip_before_filter  :verify_authenticity_token
end
