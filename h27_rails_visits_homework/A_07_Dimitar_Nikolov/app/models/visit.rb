class Visit < ApplicationRecord
  def to_public_hash
    result = Hash.new
    result[:count] = self.count || 0
    result
  end

  def increment_count
    self.count = 0 if self.count == nil
    self.count = self.count + 1
    self
  end
end
