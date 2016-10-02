require 'csv'

file_path = ARGV[0]
task_number = ARGV[1].to_i

if task_number == 1
	first_task = Hash.new
	CSV.foreach(file_path) do |row|

		first_task[row[1]] = (first_task[row[1]]).to_f + row[2].to_f
	end

	printf("%s,%.2f\n", first_task.key(first_task.values.max),first_task.values.max )	
	

elsif task_number == 2
	second_task = Hash.new 
	CSV.foreach(file_path) do |row|

		second_task[row[1]] = (second_task[row[1]]).to_i + 1
	end

	printf("%s,%d\n", second_task.key(second_task.values.max),second_task.values.max )

elsif task_number == 3
        third_task = Hash.new 
	CSV.foreach(file_path) do |row|

		third_task[row[0]] = (third_task[row[0]]).to_f + row[2].to_f
	end

	printf("%s,%.2f\n", third_task.key(third_task.values.max),third_task.values.max )

elsif task_number == 4
        forth_task = Hash.new 
	CSV.foreach(file_path) do |row|

		forth_task[row[0]] = (forth_task[row[0]]).to_i + 1
	end

	printf("%s,%d\n", forth_task.key(forth_task.values.max),forth_task.values.max )

end 
