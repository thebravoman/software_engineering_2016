class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.integer "userid"
      t.integer "times", :default => 1 
      t.timestamps null: false
    end
  end
end
