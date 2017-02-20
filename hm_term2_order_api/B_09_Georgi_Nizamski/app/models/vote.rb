class Vote < ApplicationRecord
	def format
		self.as_json(only: [:article_id, :value, :id])
	end
end
