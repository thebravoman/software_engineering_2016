require 'csv'

file = ARGV[0]
task_num = ARGV[1].to_i

task = Hash.new

CSV.foreach(file) do |row|
    case task_num.to_i
        when 1 then 
            task[row[1]] = (task[row[1]]).to_f + row[2].to_f  
        
        when 2 then
            task[row[1]] = (task[row[1]]).to_i + 1
        
        when 3 then 
            task[row[0]] = (task[row[0]]).to_f + row[2].to_f
        
        when 4 then
            task[row[0]] = (task[row[0]]).to_i + 1
           
    end
  end
  
  if task_num.to_i == 1 || task_num.to_i == 3
        printf("%s,%.2f\n", task.key(task.values.max),task.values.max )
    end 
  if task_num.to_i == 2 || task_num.to_i == 4
        printf("%s,%d\n", task.key(task.values.max),task.values.max )
end
