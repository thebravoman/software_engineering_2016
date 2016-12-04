# Develop a program named FirstName_LastName_ClassNumber_5f5a53.rb
#
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
# 	C2 contais the string 'tues'
#
# 5. Print only the result value

require 'csv'

path = ARGV[0].to_str

def take_csv_row(path)
    result_value = 0
    is_first = false
    CSV.foreach(path) do |row|
        if not is_first
            is_first = true
            next
        elsif row[0].to_i > 17 and row[1].include?'tues'
            result_value += row[2].to_i
        end
    end
    result_value
end

puts(take_csv_row(path))
