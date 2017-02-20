l=ARGV[0].to_i
excpt = ARGV[1].to_s

string = ("a"*l.."z"*l).to_a
file_=File.open("kon.txt", 'w')
string.each do |pass|
	excpt.each_char do |excp|
	if !pass.include? excp
	file_.write(char + "\n")
	end
end
end

