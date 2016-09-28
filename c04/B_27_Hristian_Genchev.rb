#name = ARGV[0]
#command = ARGV[1]


array = Array.new

require 'csv'

a = []

CSV.foreach("/home/elsyser/Desktop/info.csv") do |row|
  		a << row
	end
 
puts a.inspect

i
	
 

