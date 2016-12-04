sym = ARGV[1].to_i
valioiandrei_script = ("a"*sym.."z"*sym).to_a
juvotni = ARGV[2].to_a
file = File.open(ARGV[0], 'w')
valioiandrei_script.each do |index|
	juvotni.each do |juvotno|
		if juvotno != index
			file.write("#{index}  \n")
		end
	end
end
