require "csv"

file = ARGV[0]
task = ARGV[1].to_i
data = [{},{}]

if(task>=1 && task<=4)
 

csv = CSV.read(file)
	
	if task==1 || task==2
		searched = 1
	else
		searched = 0
	end
	
	if task%2==0
		csv.each {|row|
			if data[searched][row[searched]] == nil
				data[searched][row[searched]] = 1
			else
				data[searched][row[searched]] += 1
			end
		}
		max = data[searched].max_by(data[searched].length){|id,value| value}
		temp = max[0][1]
		for i in 0..max.length
			if max[i][1] == temp
				puts "#{max[i][0]},#{max[i][1]}"
			else
				break
			end
		end
	else
		csv.each {|row| 
			if data[searched][row[searched]] == nil
				data[searched][row[searched]] = row[2].to_f
			else
				data[searched][row[searched]] += row[2].to_f
			end
		}
		max = data[searched].max_by(data[searched].length){|id,value| value}
		temp = max[0][1]
		for i in 0..max.length
			if max[i][1] == temp
				if(max[i][1] % 1 != 0)
					puts "#{max[i][0]},#{max[i][1].round(2)}"
				else
					puts "#{max[i][0]},#{max[i][1].to_i}"
				end
			else
				break
			end
		end
	end
	#p data
	
end
