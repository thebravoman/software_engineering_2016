require "csv" 
CSV.open("/home/elsyser/Desktop/result.csv", "wb") do |csv|
Dir.foreach(ARGV[0]) do |item|
	next if item == '.' or item =='..'
	class_student = item[0]
	number = item[2] + item[3]
	csv << [class_student, number]
end
end
