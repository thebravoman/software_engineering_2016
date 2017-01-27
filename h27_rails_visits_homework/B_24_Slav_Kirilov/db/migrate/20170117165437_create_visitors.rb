class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.integer :count, default: 0
      t.integer :user
    end
  end
end
