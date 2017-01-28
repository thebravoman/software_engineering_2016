class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|
      t.string :userid
      t.string :integer, :default => 1
      t.integer :times

      t.timestamps null: false
    end
  end
end
