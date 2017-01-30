class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visit do |t|
      t.string :user_id
      t.integer :number_of_views

      t.timestamps
    end
  end
end
