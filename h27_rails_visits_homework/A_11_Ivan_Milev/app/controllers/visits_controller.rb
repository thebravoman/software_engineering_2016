class VisitsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
		id = -1
		params.each do |k, v|
			if k == 'user'
				id = v.to_i
			end
		end
		@visiter = Visit.find_by userid: id
		render :json => {"count": @visiter.times}
	end

	def visit
		p "Post methos aquared"
		id = params['user'].to_i
		if Visit.exists?(userid: id )
			user = Visit.find_by userid: id
			user.times = user.times + 1
			user.save!
		else
			user = Visit.create :userid => id
			user.save!
		end
	end
end
