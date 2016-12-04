pass_length = ARGV[0].to_i
useless_symbol = ARGV[1].to_s

File.open("pass.txt", 'w') { |file| 
	file.write(('a'*pass_length .. 'z'*pass_length).to_a) 
}
