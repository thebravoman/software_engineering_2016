require 'csv'

csv_file = ARGV[0]
is_first_line = 0
sum = 0

def is_a_digit(string)

	how_many_chars = 0
	counter = 0
	while counter < string.length() do

		if(how_many_chars > 0 || string[counter] < '0' || string[counter] > '9')  then 
			return 0
		end		

		how_many_chars += 1
		counter += 1
		
	end

	return 1
end

CSV.foreach(csv_file) do |row|

	if(is_first_line > 0) then

		if(row[0].to_i > 17 && is_a_digit(row[1]) == 0) then 
		
			sum += row[2].to_i
		end		
	end

	is_first_line += 1

	

end

puts sum
