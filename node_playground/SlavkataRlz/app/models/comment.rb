class Comment < ActiveRecord::Base
	belongs_to :articles
end
