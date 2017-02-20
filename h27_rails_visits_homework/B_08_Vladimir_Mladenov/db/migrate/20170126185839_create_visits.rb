class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
        t.integer :count, default:0
    end
  end
end
