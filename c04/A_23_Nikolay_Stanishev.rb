require 'csv'

data = ARGV[0].to_s
n = ARGV[1].to_i
$a = CSV.read(data)
$h = Hash.new

def most_watch
	$a.each do |row|
		if $h.keys.include?(row[1].to_i)
			$h[row[1].to_i].value += row[2].to_i
		else
			$h = Hash.new(row[1].to_i)
			$h[row[1]].value = row[2].to_i
		end
	end
end

most_watch

puts "#{$h.keys}"