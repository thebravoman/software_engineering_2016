num = 0
dirin = gets.chomp

Dir::foreach(dirin) do |file|
	num = num+1
end
num = num - 2
puts num

arr = Dir.entries(dirin)
while num > 0
if arr[num].include? '_'
   while arr[num].sub!('_', ',') 
   end
end
if arr[num].include? ".txt"
	arr[num].sub!(".txt", '')
	puts arr[num]
end
   num = num - 1
end

