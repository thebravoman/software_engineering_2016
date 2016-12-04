
number_of_characters = ARGV[0].to_i

odd_characters = ARGV[1].to_s

number_of_files = ARGV[2].to_i

odd_characters = odd_characters.chars.to_a

array = ('a'..'z').to_a

odd_characters.each do |odd|

	array.each do |char|
	
		if(char == odd) then array.delete(odd) end
	end
end

array = array.repeated_permutation(number_of_characters)
array = array.map(&:join);

puts array

number_of_lines = array.count


counter = 0

while counter < number_of_lines / number_of_files do

	counter++;
	
	if(counter == number_of_lines / number_of_files) 
	then 
		
		
	end
end
