require 'csv'

file = ARGV[0]
task = ARGV[1].to_i
data = Hash.new

CSV.foreach(file) do |row|
case task.to_i
    when 1 || 3
        data[row[1]] = (data[row[1]]).to_f + row[2].to_f  
    when 2 || 4
        data[row[1]] = (data[row[1]]).to_i + 1
end
end

if task.to_i == 1 || task.to_i == 3
    puts "#{data.key(data.values.max)},#{data.values.max.round(2)}"
end 
if task.to_i == 2 || task.to_i == 4
    puts "#{data.key(data.values.max)},#{data.values.max}"
end
