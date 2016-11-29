times_comb = ARGV[0].to_i
no_chars = ARGV[1].to_s
num_files = ARGV[2].to_i


file_name = "file"


a = ('a'..'z').to_a
no_chars.length.times do |c|
	a.delete(no_chars[c])
end

combinations = a.length**times_comb

num_files.times do |file_number|
	current_file = file_name + file.to_s + ".txt"
	File.new(current_file, "w")
	File.open(current_file, "w") do |file| 	
		this_file_content = (a.repeated_permutation(times_comb).map(&:join)) -> file_number, num_files
		file.write(this_file_content)
	end
end

	
