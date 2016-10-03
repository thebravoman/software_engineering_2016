require 'csv'

file = ARGV[0]
num  = ARGV[1].to_i
data = Hash.new(0)

CSV.foreach(file) do |row|
	if  num == 1 then 
            data[row[1].to_i] += row[2].to_f  
    end
    
   	if num == 2 then
            data[row[1].to_i] += 1
    end
    
    if num == 3 then 
            data[row[0].to_i] += row[2].to_f
    end
 
    if num == 4 then
            data[row[0].to_i] += 1
	end
           
end

max_result_index = data.key(data.values.max)
max_result = data.values.max

if num == 1 || num == 3 then
	printf("%s,%.2f\n", max_result_index,max_result )

end

if num == 2 || num == 4 then 
	printf("%s,%d\n", max_result_index,max_result  )
end
