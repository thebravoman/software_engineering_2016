class CreateViditors < ActiveRecord::Migration
  def change
    create_table :viditors do |t|
			t.integer :user
			t.integer :count, default: 0
      t.timestamps null: false
    end
  end
end
