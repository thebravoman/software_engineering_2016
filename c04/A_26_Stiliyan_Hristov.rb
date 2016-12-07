
file1 = ARGV[0].to_s
method = ARGV[0].to_i

require 'csv'
arr = Array.new
i = 0
CSV.foreach(File.path(file1)) do |row|
	arr[i] = row
	i+=1
end


arr.each do |element|
		
	
end

#puts arr[0][1] , arr[1][1]
i = 0 
j = 0 


sum = Array.new


arr.each do |element|
	
	puts arr[i][1]
		
			
	
	i+=1
end

sum = sum.sort
#puts sum.inspect




