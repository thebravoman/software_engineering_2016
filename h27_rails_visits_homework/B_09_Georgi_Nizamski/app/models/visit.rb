class Visit < ApplicationRecord
	def set_counter
		self.visit_counter = 1
	end
	
	def increment
		self.visit_counter += 1
	end
end
