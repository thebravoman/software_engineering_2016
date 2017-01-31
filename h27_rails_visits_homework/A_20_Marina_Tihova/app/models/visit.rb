class Visit < ApplicationRecord
  def increment_counter
    self.count += 1
  end
end
