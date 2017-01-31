require 'json'
Dir.glob(ARGV[0]+"/**/*_*_*_*.txt") do |file|
	if File.file?(file) then
		
		student = file.gsub(".txt", "")
		c = File.read(file)
		c = c.gsub("\n", "")
		
		puts "curl #{c}/visits?user=5"
		result = `curl #{c}/visits?user=5`
		begin
		if result = JSON.parse(result) then
			grades['#{student}'] = 1
		else
			 grades['#{student}'] = 0
		end
		
		rescue JSON::ParserError
		end
		puts "curl -X POST --data 'user=5' #{c}visits"
		`curl -X POST --data "user=5" #{c}visits`
		puts "curl #{c}/visits?user=5"
		`curl #{c}/visits?user=5`
	end
end
puts grades
