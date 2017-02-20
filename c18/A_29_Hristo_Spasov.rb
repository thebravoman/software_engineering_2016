key_length = ARGV[0].to_i

File.open('./keys.txt', 'w') do |file|
	file.puts(('a'*key_length..'z'*key_length).to_a)
end
