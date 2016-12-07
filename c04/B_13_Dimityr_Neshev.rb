require 'csv'

a=[10][10]
i=0
p=0
CSV.foreach("/home/elsyser/Desktop/maikamunamitko/data.csv") do |row|
	a[i][p]=row
	i++
	p++ 
end
