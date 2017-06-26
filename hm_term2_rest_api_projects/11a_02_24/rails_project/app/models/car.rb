class Car < ApplicationRecord
	 scope :manufacturer, -> (manufacturer) { where manufacturer: manufacturer }
	 scope :fueltype, -> (fueltype) { where fueltype: fueltype }
	 scope :carmodel, -> (carmodel) { where carmodel: carmodel }
	 scope :fuelconsumption, -> (fuelconsumption) { where fuelconsumption: fuelconsumption }
	 scope :cylinders, -> (cylinders) { where cylinders: cylinders }
	 scope :capacity, -> (capacity) { where capacity: capacity }
	 scope :valves, -> (valves) { where valves: valves }
	 scope :compression, -> (compression) { where compression: compression }
	 scope :maximumspeed, -> (maximumspeed) { where maximumspeed: maximumspeed }
	 scope :horsepower, -> (horsepower) { where horsepower: horsepower }
end
