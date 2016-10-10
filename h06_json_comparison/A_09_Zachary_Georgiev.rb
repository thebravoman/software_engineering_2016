require 'json'

if(JSON.parse(File.read(ARGV[0])) == JSON.parse(File.read(ARGV[1])))
	puts 1
else
	puts 0
end