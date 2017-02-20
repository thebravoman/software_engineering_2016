require 'csv'
	data =Hash.new(0)

	CSV.foreach(ARGV[0]) do |row|
		if ARGV[1] > 2
			data[row[0]] = data[row[0]]+(ARGV[1] % 2 == 0)? 1 : row[2].to_f
		else 
			data[row[1]] = data[row[1]]+(ARGV[1] % 2 == 0)? 1 : row[2].to_f
		end	
	end

	if ARGV[1] % 2 == 0
		printf "%i,%i\n", *data.max_by{|k,v| v}	
	else
		printf "%i,%.2f\n", *data.max_by{|k,v| v}
	end

