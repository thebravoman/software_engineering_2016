class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|
	  t.integer :user
      t.integer :count, default: 0
    end
  end
end


