require 'csv'

result=0
i=0

csv = CSV.parse(ARGV[0])

CSV.foreach (ARGV[0].to_s) do |row|
	if(i!=0)
		if(row[0].to_i > 17 )
				if(row[1].match('tues') )
					result = result + row[0].to_i
					result += 1
				end
		end
	end
	
    i=i+1
    
end

puts result
