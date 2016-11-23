# a =  97 => 1
# z = 122 => 25

n = ARGV[0].to_i
genlimit = ARGV[2].to_i
counter = 0
counter2 = 0
gen = String.new
file = File.open(ARGV[1].to_s, 'w')

while counter != genlimit do
	while counter2 != n do
		randgen = Random.rand(25)
		randgen += 97
		file.write(randgen.chr)
		counter2+=1
	end
	counter2 = 0
	file.write("\n")
	counter+=1
end
