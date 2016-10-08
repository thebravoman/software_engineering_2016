require 'json'

h1 = Hash[JSON.parse(File.read(ARGV[0])).sort]
h2 = Hash[JSON.parse(File.read(ARGV[1])).sort]

if h1 == h2
	puts 1
else
	puts 0
end