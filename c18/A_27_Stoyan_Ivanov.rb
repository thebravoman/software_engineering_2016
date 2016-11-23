File.open("file.txt", 'w') {|file|

	('a'*ARGV[0].to_i .. 'z'*ARGV[0].to_i).each { |line|
		file << line + "\n"
	}
} 