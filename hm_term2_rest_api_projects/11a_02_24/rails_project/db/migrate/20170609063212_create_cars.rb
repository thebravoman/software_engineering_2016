class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :manufacturer
      t.string :carmodel
      t.string :fueltype
      t.string :fuelconsumption
      t.integer :cylinders
      t.integer :capacity
      t.integer :valves
      t.float :compression
      t.float :maximumspeed
      t.float :horsepower

      t.timestamps
    end
  end
end
