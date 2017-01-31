require 'json'
require 'crack'
require 'rubygems'

h1=Hash.new
h2=Hash.new
h1=Crack::XML.parse(File.read(ARGV[2]))
h2=JSON.parse(File.read(ARGV[1]))
sum = 0


h1.each do |key_x , value_x|
	temp = false
	if value_x.size <= 3
		h2.each do |key_j , value_j|
			if value_x == key_j
			      temp = true
			end
		end
		if temp == false
			sum = sum + value_x.size
		end
	end
end

puts sum
