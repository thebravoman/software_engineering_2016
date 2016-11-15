require 'rubygems'
require 'json'
require 'crack'

xmlfile_ = ARGV[0]
jsonfile_ = ARGV[1]

xml = File.read(xmlfile_)
json = File.read(jsonfile_)

file1 = Crack::XML.prase(xmlfile_)
file2 = JSON.parse(jsonfile_)

temp = Hash.new

file1.each do |k, v|
	k.push(temp)
end

file2.each do |v, k|
	v.push(temp)
end

count = 0
temp.each do |k, v|
	if k == v
		count += 1
	end
end

count = count*count
puts count
	
