require 'csv'




file = ARGV[0].to_s
task = ARGV[1].to_i

copy = CSV.read(file)

content = Hash.new

def most_viewed(content)

	
			content.each do |key, value|
			 
			  value.each do |k,v|
			    
			  end
			end
	
	
	end
	


copy.each do |row|
		content[row[0].to_i] = Hash.new()
		content[row[0].to_i][row[1].to_i] = row[2].to_i 
end

most_viewed(content)
=begin
require 'csv'




file = ARGV[0].to_s
task = ARGV[1].to_i

copy = CSV.read(file)


content = Hash.new

def most_viewed(content)

	puts content
	puts content.size
	i=1
	m=0
	f=0
	g=0	
		while i	< content.size do 
			k=0
			while k < content.size do 
				puts content[i]
					while f	< content.size do 
						g=0
						while g < content.size do 
							if content[i][f] == content[k][g]
								puts content[i][f]
								
							end
							g=g+1
						end


					f=f+1
					end
					
				k=k+1
			end


		i=i+1
		end
	
	puts m
	end
	


copy.each do |row|
		content[row[0].to_i] = Hash.new()
		content[row[0].to_i][row[1].to_i] = row[2].to_i 
end

most_viewed(content)
=end
