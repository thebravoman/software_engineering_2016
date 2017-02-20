cryptlen = ARGV[0].to_i
charpos = Array.new
iter = cryptlen
new = 1
str = "abcdefghijklmnopqrstuvwxtyz"
ARGV[1].each_char { |c| str.gsub(c,"")}

for i in 0..cryptlen 
	charpos.push(0)
end
for f in 0..cryptlen-1
	for g in 0..str.length
			for i in 0..cryptlen-1
				print str[charpos[i]]
			end
			print "\n"
			charpos[iter] += 1
		charpos[iter-new] += 1
	end
	new += 1
end
