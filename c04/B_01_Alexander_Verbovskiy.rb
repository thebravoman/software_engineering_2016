require 'csv'

count = []
count_2 = []
count_3 = 0

 

helper = 1
user = []
video = []
percent = []


CSV.foreach(File.path("result.csv")) do |row|
 
 count = row[0].to_i 
 user[count] = user[count].to_i + helper.to_i
 
 count_2 = row[1].to_i
 percent[count_2] = percent[count_2].to_f + row[2].to_f 
 
 

 puts "#{count_2} " " - " " #{percent[count_2]}"

end 
