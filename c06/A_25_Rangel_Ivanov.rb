require 'csv'
require 'json'

data = ARGV[0].to_s
n = ARGV[1].to_i
$a = CSV.read(data)
$h = Hash.new

def most_watch(j)
	$a.each do |row|
		if $h.key?(row[j.to_i])
			$h[row[j.to_i]] += row[2].to_f
		else
			$h[row[j.to_i]] = row[2].to_f
		end
	end
end

def most_view(j)
	$a.each do |row|
		if $h.key?(row[j.to_i])
			$h[row[j.to_i]] += 1
		else
			$h[row[j.to_i]] = 1
		end
	end
end

if n == 1
	most_watch(1)	
end
if n == 2
	most_view(1)
end
if n == 3
	most_watch(0)
end
if n == 4
	most_view(0)
end

keys = $h.select{|k,v| v == $h.values.max}
a[2] = [row, $h[row].round(2)]
b[2] = [row, $h[row]]
aa = a.to_json
bb = b.to_json
if n == 1 || n == 3
	keys.each do |row|
		puts aa
	end
else
	keys.each do |row|
		puts bb
	end
end
