require 'json'

	file1 = File.read(ARGV[0].to_s)
	file2 = File.read(ARGV[1].to_s)
	
	puts JSON.parse(file1) == JSON.parse(file2) ? 1 : 0
