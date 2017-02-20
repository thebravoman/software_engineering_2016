=begin
Develop a program named FirstName_LastName_ClassNumber_fc42dd.rb

1. you are given an argument that is the full path to CSV file
1.1 if there are other arguments they should be discarded
2. The CSV file has four columns
3. The first row of the CSV are the headers with the following names

		C1, C2, C3, C4

4. Find the sum of all the values for column C3
	where
	C1 > 17
	and
	C2 is not a digit

5. Print only the result value
=end

require 'csv'

copy = CSV.read(ARGV[0].to_s)
sum = 0
copy.each do |row|
		if row[0].to_i > 17
        if row[1].to_i.to_s != row[1]
		sum = row[2].to_i + sum
        end
		end
end
puts sum
