

require 'csv'

filename = ARGV[0].to_s
task = ARGV[1].to_i
input = Hash.new
USER = 0
VIDEO = 1
PERC = 2



	if task == 1
		CSV.foreach(filename) do |row|
			input[row[1]] = input[row[1]].to_f + row[2].to_f
		end

	elsif task == 2
		CSV.foreach(filename) do |row|
			input[row[1]] = input[row[1]].to_i + 1
		end
	elsif task == 3
		CSV.foreach(filename) do |row|
			input[row[1]] = input[row[0]].to_f + row[2].to_f
		end
	elsif task == 4
		CSV.foreach(filename) do |row|
			input[row[1]] = input[row[0]].to_i + 1
		end
	end


	if task == 2 
		printf("%s,%d\n", input.key(input.values.max), input.values.max)
	elsif task == 1 
		printf("%s,%.2f\n", input.key(input.values.max), input.values.max)
	elsif task == 4 
		printf("%s,%d\n", input.key(input.values.max), input.values.max)
	elsif task == 3 
		printf("%s,%.2f\n", input.key(input.values.max), input.values.max)
	end


