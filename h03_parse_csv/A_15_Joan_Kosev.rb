require "csv"


file = ARGV[0].to_s
t = ARGV[1].to_i
$a = CSV.read(file)
$h = Hash.new

def top_v (i)

	$a.each do |row|
		if $h.key?(row[i.to_i])
			$h[row[i.to_i]] += 1
		else
			$h[row[i.to_i]] = 1
		end
	end
end

def top_w(i)

	$a.each do |row|
		if $h.key?(row[i.to_i])
			$h[row[i.to_i]] += row[2].to_f
		else
			$h[row[i.to_i]] = row[2].to_f
		end
	end
end

case

	when t == 1
		top_w(1)
	when t == 3
		top_w(0)	
	when t == 2
		top_v(1)
	when t == 4
		top_v(0)
end

max = $h.values.max
keys = $h.select{|k,v| v == max}.keys

if t == 2 || t == 4
	
	keys.each do |row|
		puts "#{row},#{$h[row]}"
	end
else
	keys.each do |row|
		puts "#{row},#{$h[row].round(2)}"
	end
end
