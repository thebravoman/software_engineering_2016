require 'json'

json_1 = JSON.parse File.read ARGV[0]
json_2 = JSON.parse File.read ARGV[1]

if json_1 == json_2
  puts 1
else
  puts 0
end
