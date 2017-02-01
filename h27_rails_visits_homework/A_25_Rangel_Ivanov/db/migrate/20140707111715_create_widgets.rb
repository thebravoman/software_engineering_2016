class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.integer :user
      t.integer :count, default: 0
    end
  end
end
