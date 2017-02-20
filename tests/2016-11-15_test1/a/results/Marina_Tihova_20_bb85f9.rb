# 1. you are given an argument that is the full path to CSV file
# 1.1 if there are other arguments they should be discarded
# 2. The CSV file has four columns
# 3. The first row of the CSV are the headers with the following names
#
# 		C1, C2, C3, C4
#
# 4. Find the sum of all the values for column C3
# 	where
# 	C1 > 17
# 	and
# 	C2 is not a digit
#
# 5. Print only the result value


require 'csv'

def is_number? string
  true if Float(string) rescue false
end

sum = 0

CSV.foreach(ARGV[0]) do |row|
  c1 = row[0]
  c2 = row[1]
  c3 = row[2]

  sum += c3.to_i if c1.to_i > 17 and !(is_number?(c2))
end

puts sum
