class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.integer :nut
      t.integer :counter, :default => 0

      t.timestamps null: false
    end
  end
end
