require 'csv'




file = ARGV[0].to_s
task = ARGV[1].to_i

copy = CSV.read(file)

content = Hash.new




def most_viewed(content)
result = Hash.new
	
			content.each do |key, value|
 			  value.each do |k,v|
				

				if result[k.to_i] == nil
				 result[k.to_i] = v.to_f
				else
				 result[k.to_i] =  result[k.to_i] + v.to_f	
			
				end 
 			  end
			end 
	puts "#{result.max_by{|k,v| v}}"
	
	end



def most_watched(content)
result = Hash.new
		
		content.each do |key, value|
				  value.each do |k,v|
						if result[k.to_i] == nil
						 result[k.to_i] = 1
						else
						 result[k.to_i] =  result[k.to_i] + 1
			
						end 
 			  		end
			end
		
	puts "#{result.max_by{|k,v| v}}"
		

	end


def most_zombified(content)
result = Hash.new
	
			content.each do |key, value|
 			  value.each do |k,v|
				

				if result[key.to_i] == nil
				 result[key.to_i] = v.to_f.round(2)
				else
				 result[key.to_i] =  result[key.to_i] + v.to_f.round(2)	
			
				end 
 			  end
			end
	puts "#{result.max_by{|k,v| v}}"
	
end

def most_videos_watched(content)
result = Hash.new
		
		content.each do |key, value|
				  value.each do |k,v|
						if result[key.to_i] == nil
						 result[key.to_i] = 1
						else
						 result[key.to_i] =  result[key.to_i] + 1
			
						end 
 			  		end
			end
		
	puts "#{result.max_by{|k,v| v}}"
		

	end





copy.each do |row|
		if content[row[0].to_i] == nil
		content[row[0].to_i] = Hash.new()
		end
		content[row[0].to_i][row[1].to_i] = row[2].to_f
end

if task == 1
most_viewed(content)
end

if task == 2
most_watched(content)
end

if task == 3
most_zombified(content)
end

if task == 4
most_videos_watched(content)
end 

