require "csv"

file=ARGV[0]
number=ARGV[1].to_i
result=[{},{}]

if(number>=1 && number<=4)
csv=CSV.read(file)
	if (number==1 || number==2)
		found=1
	else
		found=0
	end
	if (number%2==0)
		csv.each {|row|
			if (result[found][row[found]]==nil)
				result[found][row[found]]=1
			else
				result[found][row[found]]=result[found][row[found]]+1
			end
		}
		max=result[found].max_by(result[found].length){|id,value| value}
		temp=max[0][1]
		for i in 0..max.length
			if (max[i][1]==temp)
				puts "#{max[i][0]},#{max[i][1]}"
			else
				break
			end
		end
	else
		csv.each {|row| 
			if (result[found][row[found]]==nil)
				result[found][row[found]]=row[2].to_f
			else
				result[found][row[found]]=result[found][row[found]]+row[2].to_f
			end
		}
		max=result[found].max_by(result[found].length){|id,value| value}
		temp=max[0][1]
		for i in 0..max.length
			if (max[i][1]==temp)
				if(max[i][1]%1!=0)
					puts "#{max[i][0]},#{max[i][1].round(2)}"
				else
					puts "#{max[i][0]},#{max[i][1].to_i}"
				end
			else
				break
			end
		end
	end
end
