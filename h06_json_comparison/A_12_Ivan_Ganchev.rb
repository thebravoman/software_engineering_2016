require 'json'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

object1 = JSON.parse(file1)
object2 = JSON.parse(file2)

if object1 == object2 
	puts 1
else 
	puts 0
end



