class Visits < ActiveRecord::Base
    def increase_counter
        self.count += 1
    end
end
