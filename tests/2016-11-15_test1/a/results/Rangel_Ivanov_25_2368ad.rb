require 'csv'
require 'json'

json_file = Hash[JSON.parse(File.read(ARGV[1]))]
res = 0 
res1 = 0
data = Hash.new

CSV.foreach(ARGV[0]) do |row|
	data[row[1]] = row[1]
end

arr_of_arrs = CSV.read(ARGV[0])

json_file.each do |k,v|
	if arr_of_arrs[1] != k
		res *= v
	if data[k] != k
		res1 *= v
end

puts res == res1 ? res : '0'
