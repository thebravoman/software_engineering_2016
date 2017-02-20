require 'csv'

#20 bona na den e moyata shema

file = ARGV[0]
command = ARGV[1].to_i

$stack = Hash.new

def myprint(command)
	if command % 2 == 0
		printf("%s,%d\n", $stack.key($stack.values.max),$stack.values.max )
		
	else
		printf("%s,", $stack.key($stack.values.max))
		print $stack.values.max.round(2).to_s + "\n"
	
	end
end

if command == 1
	CSV.foreach(file) do |row|

		$stack[row[1]] = ($stack[row[1]]).to_f + row[2].to_f
	end
	
	myprint(command)
	
	
elsif command == 2
	CSV.foreach(file) do |row|

		$stack[row[1]] = ($stack[row[1]]).to_i + 1
	end

	myprint(command)

elsif command == 3
	CSV.foreach(file) do |row|

		$stack[row[0]] = ($stack[row[0]]).to_f + row[2].to_f
	end

	myprint(command)

elsif command == 4
	CSV.foreach(file) do |row|

		$stack[row[0]] = ($stack[row[0]]).to_i + 1
	end

	myprint(command)

end 
