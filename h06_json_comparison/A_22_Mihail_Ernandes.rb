require 'json'
if JSON.parse(File.read(ARGV[1])) == JSON.parse(File.read(ARGV[0]))
	puts 1
else
	puts 0
end
