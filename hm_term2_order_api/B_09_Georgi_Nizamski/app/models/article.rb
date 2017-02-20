class Article < ApplicationRecord
	def format
		self.as_json(only: [:id, :name, :created_at, :updated_at])
	end

	def normdist_format
		self.as_json(only: [:id, :name, :comments_score, :votes_score])
	end
end
