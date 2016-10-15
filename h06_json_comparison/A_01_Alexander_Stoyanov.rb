require'json'

h1=Hash.new
h2=Hash.new
h1=JSON.parse(File.read(ARGV[0])).sort
h2=JSON.parse(File.read(ARGV[1])).sort

if h1.size == h2.size
	if(h1 == h2)
	 	puts 1
	else 
		puts 0
	end
else 
	puts 0
end
