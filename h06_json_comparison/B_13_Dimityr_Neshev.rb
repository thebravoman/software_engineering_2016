require 'json'
file_1 = File.read(ARGV[0])
file_2 = File.read(ARGV[1])
JSON.parse(file_1)
JSON.parse(file_2) 

if JSON.parse(file_1) == JSON.parse(file_2) then
  puts "1"
else puts "0"
end
