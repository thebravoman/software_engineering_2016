require 'csv'
file = ARGV[0]
task = ARGV[1].to_i
information = Hash.new
if task == 1
	CSV.foreach(file) do |row|
		information[row[1]] = (information[row[1]]).to_f + row[2].to_f
	end
	printf("%s,%.2f\n", information.key(information.values.max),information.values.max )
end	
if task == 2
	CSV.foreach(file) do |row|
		information[row[1]] = (information[row[1]]).to_i + 1
	end
	printf("%s,%d\n", information.key(information.values.max),information.values.max )
end 
if task == 3
	CSV.foreach(file) do |row|
		information[row[0]] = (information[row[0]]).to_f + row[2].to_f
	end
	printf("%s,%.2f\n", information.key(information.values.max),information.values.max )
end
if task == 4
	CSV.foreach(file) do |row|
		information[row[0]] = (information[row[0]]).to_i + 1
	end
	printf("%s,%d\n", information.key(information.values.max),information.values.max )
end
