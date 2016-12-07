require 'json'

firstf = JSON.parse File.read ARGV[0]
secondf = JSON.parse File.read ARGV[1]

if firstf == secondf
  puts 1

else
  puts 0

end