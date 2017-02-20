num = ARGV[0]
#File.open("a.txt", "w") do |a|
#	a = ("a"*2.."z"*2).to_a
#end
File.open("a.txt", 'w') { |file| file.write(("a"*6.."z"*6).to_a) }
