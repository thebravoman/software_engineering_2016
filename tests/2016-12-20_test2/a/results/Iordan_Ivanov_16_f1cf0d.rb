require "csv"
require "json"
 
json = JSON.parse(File.read(ARGV[1]))

min = 0

json.each {|k, v|
	min = v
}

num = 0

CSV.foreach(ARGV[0]){|row| num = row[1]}

json.each {|k, v|
   CSV.foreach(ARGV[0]) do
   |row| num = row[1]
   if v == num
   	if v < min
   		min = v
   	end
   end
   end
}

puts min
