require 'csv'
require 'json'

csv = ARGV[0].to_s
json = ARGV[1].to_s

file = File.read(json)
data = JSON.parse(file)

min = data.to_s
first = 1
data.each do |d|
	if(first == 1)
		first = 0
		min = d[1].to_str
	end
	CSV.foreach(File.path(csv)) do |c| 
		if(d[1].to_s == c[1].to_s)
			if(d[1].to_s < min)
				min = d[1]
			end	
		end
	end
end

p min
