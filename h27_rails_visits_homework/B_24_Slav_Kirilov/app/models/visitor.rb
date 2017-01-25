class Visitor < ActiveRecord::Base
	
	def visit
		self.count += 1
	end
end
