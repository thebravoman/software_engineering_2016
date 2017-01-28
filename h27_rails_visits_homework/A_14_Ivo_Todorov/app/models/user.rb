class User < ApplicationRecord
	def add_visit
		self.visits+=1
	end
end
