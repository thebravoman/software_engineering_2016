class Visit < ApplicationRecord
  self.table_name = "visit"
  # define_attribute_methods 'user_id', 'number_of_views'
  attr_accessor :number_of_views, :user_id
end
