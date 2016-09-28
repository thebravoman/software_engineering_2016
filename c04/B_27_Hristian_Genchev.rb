#name = ARGV[0]
#command = ARGV[1]


array = Array.new

require 'csv'

a = []

CSV.foreach("/home/elsyser/Desktop/info.csv") do |row|
  		a << row
	end
 
puts a.inspect

case command
	when 1
		a.each do |row|
			row.each do |float|
				if row == 2
					times = {row: float}
				end 
			end
		end

	when 2


	when 3



	when 4

