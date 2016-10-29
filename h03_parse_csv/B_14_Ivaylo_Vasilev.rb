require 'csv'

state  = ARGV[1].to_i
data = Hash.new(0)

CSV.foreach(ARGV[0]) do |row|
	if  state == 1 
            data[row[1].to_i] = data[row[1].to_i] + row[2].to_f  
    end
    
   	if state == 2 
            data[row[1].to_i] = data[row[1].to_i] + 1
    end
    
    if state == 3 
            data[row[0].to_i] = data[row[0].to_i] + row[2].to_f
    end
 
    if state == 4 
            data[row[0].to_i] = data[row[0].to_i] + 1
	end
           
end

max = data.key(data.values.max)
max_result = data.values.max

if state == 1 || state == 3 then
	printf("%s,%.2f\n", max,max_result )

end

if state == 2 || state == 4 then 
	printf("%s,%d\n", max,max_result  )
end
