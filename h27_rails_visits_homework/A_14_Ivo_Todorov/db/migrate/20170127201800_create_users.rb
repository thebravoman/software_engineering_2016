class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :number
      t.integer :visits, :default => 0

      t.timestamps
    end
  end
end
