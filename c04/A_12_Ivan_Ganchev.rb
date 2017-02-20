rows = Array.new
count = 0

f = File.open("people.csv", "r")

f.each_line("") do |line|

	fields = line.split(',')

	rows[count]{Array.new(3)}

	rows[count][0] = field[0]
	rows[count][1] = field[1]
	rows[count][2] = field[2]

	count++
	 
end


