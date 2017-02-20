require 'csv'

path = ARGV[0]

def is_number? string
  true if Float(string) rescue false
end

sum = 0

CSV.foreach(path, { headers: true }) do |row|
	if is_number?(row[0]) && is_number?(row[1]) && is_number?(row[2])
		c1 = row[0].to_i
		c2 = row[1].to_i
		c3 = row[2].to_i
		
		sum += c3 if c1 > 17 && ((c2 >= 0 && c2 <= 9) || (c2 <= 0 && c2 >= -9))
	end
end

puts sum

