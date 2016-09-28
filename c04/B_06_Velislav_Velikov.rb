require 'csv'

CSV.foreach("/home/elsyser/Desktop/newe/data.csv") do |row|
	a=row
	print a[0,1]	
	print a[1,1]
	print a[2,1]
	puts ''
end
