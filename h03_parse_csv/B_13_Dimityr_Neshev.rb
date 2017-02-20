require 'csv'

	csv=ARGV[0]
	input=ARGV[1].to_i
	data=Hash.new(0)

CSV.foreach(csv) do |row|

	if input <= 2
		data[row[1]] += (input % 2 == 0)?  1 : row[2].to_f
	else 
		data[row[0]] += (input % 2 == 0)?  1 : row[2].to_f
	end
end

printf input % 2 == 0? "%i,%i\n":"%i,%.2f\n", *data.max_by{|k,v| v}
