
file1 = ARGV[0].to_s
method = ARGV[1].to_i

require 'csv'
arr = Array.new
i = 0

CSV.foreach(File.path(file1)) do |row|
	arr[i] = row
	i+=1
end



i = 0 
 
hash = Hash.new

hash.default = 0

if method == 1


	arr.each do |video|
	
	hash[video[1].to_i] =  hash[video[1].to_i] + video[2].to_f
	
	end 

	hash = hash.sort_by {|k,v| v}.reverse

	print "#{hash[0][0]},"
	
	if hash[0][1] % 1 == 0 
		puts hash[0][1].to_i
	else
		puts hash[0][1].round(2)
	end


	if hash[0][1] == hash[1][1]
		print "#{hash[1][0]},"
	
	if hash[1][1] % 1 == 0 
		puts hash[1][1].to_i
	else
		puts hash[1][1].round(2)
	end

	end

end

if method == 3
	
	arr.each do |video|
	
	hash[video[0].to_i] =  hash[video[0].to_i] + video[2].to_f
	
	end 

	hash = hash.sort_by {|k,v| v}.reverse

	#puts hash.inspect
		

	print "#{hash[0][0]},"
	
	if hash[0][1] % 1 == 0 
		puts hash[0][1].to_i
	else
		puts hash[0][1].round(2)
	end


	if hash[0][1] == hash[1][1]
		print "#{hash[1][0]},"
	
	if hash[1][1] % 1 == 0 
		puts hash[1][1].to_i
	else
		puts hash[1][1].round(2)
	end

	end	
end

if method == 2

		arr.each do|video|
	

	hash[video[1].to_i] =  hash[video[1].to_i] + 1  
		end 
		
		hash = hash.sort_by {|k,v| v}.reverse
		print "#{hash[0][0]},"
	
	if hash[0][1] % 1 == 0 
		puts hash[0][1].to_i
	else
		puts hash[0][1].round(2)
	end


	if hash[0][1] == hash[1][1]
		print "#{hash[1][0]},"
	
	if hash[1][1] % 1 == 0 
		puts hash[1][1].to_i
	else
		puts hash[1][1].round(2)
	end

	end	

end


if method == 4
		arr.each do|video|
	

	hash[video[0].to_i] =  hash[video[0].to_i] + 1  
		end 
		
		hash = hash.sort_by {|k,v| v}.reverse
		print "#{hash[0][0]},"
	
	if hash[0][1] % 1 == 0 
		puts hash[0][1].to_i
	else
		puts hash[0][1].round(2)
	end


	if hash[0][1] == hash[1][1]
		print "#{hash[1][0]},"
	
	if hash[1][1] % 1 == 0 
		puts hash[1][1].to_i
	else
		puts hash[1][1].round(2)
	end

	end	

end

