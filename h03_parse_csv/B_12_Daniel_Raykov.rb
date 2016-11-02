require 'csv'

def print_as_float(file)
	printf("%s,%.2f\n", file.key(file.values.max), file.values.max)
end

def print_as_int(file)
	printf("%s,%d\n", file.key(file.values.max), file.values.max)
end

csv_file = ARGV[0]
task_number = ARGV[1].to_i
csv_hash = Hash.new

if task_number - 2 < 1 then index = 1
else index = 0
end

CSV.foreach(csv_file) do |row|
	if task_number % 2 == 1 then csv_hash[row[index]] = (csv_hash[row[index]]).to_f + row[2].to_f
	else csv_hash[row[index]] = (csv_hash[row[index]]).to_i + 1
	end
end

if task_number % 2 == 1 then print_as_float(csv_hash)
else print_as_int(csv_hash)
end
