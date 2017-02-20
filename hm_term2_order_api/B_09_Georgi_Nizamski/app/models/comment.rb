class Comment < ApplicationRecord
	def format
		self.as_json(only: [:id, :article_id, :content])	
	end
end
