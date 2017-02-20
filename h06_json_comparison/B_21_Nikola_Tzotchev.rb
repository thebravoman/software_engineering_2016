require 'json'
file1 , file2 = File.read(ARGV[0]) , File.read(ARGV[1]) 
json1 = JSON.parse(file1)
json2 = JSON.parse(file2)
puts json1 == json2 ? "1" : "0"
