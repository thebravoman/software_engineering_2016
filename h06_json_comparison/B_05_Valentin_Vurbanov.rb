require 'json'

	filen1 = File.read(ARGV[0].to_s)
	filen2 = File.read(ARGV[1].to_s)
	
	puts JSON.parse(file1) == JSON.parse(file) ? 1 : 0