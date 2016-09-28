require 'csv'

a = Array.new {Array.new}
i=0
CSV.foreach("asdf.csv") do |row|
	a[i] = row
	i += 1	
end
flag = 0
i = 0
masiv = Array.new {Array.new}
a.each do |row|
	masiv.each do |m|
		if m[0] == row[0]
			flag = 1
			m[1] += 1				
		end
	end
	if flag == 0
		
  	
	end
	
	#row.each do |user|
	#	print user
	#	print "\n"
	#end
end
