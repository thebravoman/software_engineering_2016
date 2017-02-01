class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.integer :user
      t.integer :count

      t.timestamps
    end
  end
end
