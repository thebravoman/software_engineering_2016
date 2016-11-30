=begin
Develop a program named FirstName_LastName_ClassNumber_b23c0d.rb

1. you are given an argument that is the full path to CSV file
1.1 if there are other arguments they should be discarded
2. The CSV file has four columns
3. The first row of the CSV are the headers with the following names

		C1, C2, C3, C4

4. Find the product of all the values for column C3 
	where 
	C1 < C4
	and 
	C3 = C4+3

5. Print only the result value
=end

require 'csv'
 
result = 0
 
CSV.foreach (ARGV[0], {:headers => true}) do |row|
	c1 = row[0].to_i
	c2 = row[1].to_i
	c3 = row[2].to_i
	c4 = row[3].to_i

	result += c3 if c1 < c4 and c3 == c4 + 3
end

puts result
