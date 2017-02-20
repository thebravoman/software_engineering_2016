class Article < ActiveRecord::Base
	has_one :comments
	has_one :votes
end
