require 'json'
grades = Hash.new
count = Hash.new

Dir.glob(ARGV[0] + "/**/*_*_*_*.txt") do |file|
	times = ARGV[1].to_i
	if File.file?(file) then
		student = file.gsub("/home/lacho/Desktop/software_engineering_2016/h27_rails_visits_homework//", "")
		c = File.read(file)
		c = c.gsub("\n", "")
		
		
		
		for i 0..times
			`curl -X POST --data "user=5" #{c}/visits`
		end
		
		result = `curl #{c}/visits?user=5`
		
		
	end
end
puts grades.to_a
