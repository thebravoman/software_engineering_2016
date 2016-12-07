counter = 0
Dir.foreach("/home/elsyser/Desktop/software_engineering_2016/c01_introduction") do |file|
counter += 1 



name = file.to_s


information = Array.new()

information = name.split('_', '.')


print(information)
puts("\n")

#puts name.to_s
end
 
puts(counter)
