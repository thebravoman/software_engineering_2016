require 'csv'

directory, command, data = ARGV[0], ARGV[1].to_i, Hash.new(0)

CSV.foreach(directory) do |row|
	if command == 1
		data[row[1].to_i] = data[row[1].to_i] + row[2].to_f
	end 
	
	if command == 2
		data[row[1].to_i] = data[row[1].to_i] + 1 
	end
	
	if command == 3
		data[row[0].to_i] = data[row[1].to_i] + row[2].to_f
	end
	
	if command == 4
		data[row[0].to_i] = data[row[0].to_i] + 1
	end
end

	case command
		when 1
			then printf("%s,%.2f\n", data.key(data.values.max),data.values.max)
		when 2
			then printf("%s,%d\n", data.key(data.values.max),data.values.max)
		when 3
			then printf("%s,%.2f\n", data.key(data.values.max),data.values.max)
		when 4
			then printf("%s,%d\n", data.key(data.values.max),data.values.max)
	end

