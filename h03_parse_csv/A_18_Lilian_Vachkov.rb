require 'csv'

type = ARGV[1].to_i
fl = ARGV[0]

a = Array.new {Array.new}
i=0

CSV.foreach("cvs.csv") do |row|
	a[i] = row
	i += 1
end



flag = 0
i = 0
array = Hash.new
a.each do |row|


	case type
	when 1
		i = 1
	when 2
		i = 1
	when 3
		i = 0
	else
		i = 0
	end


	case type
	when 2, 4
		if array[row[i]] != nil
			array[row[i]] += 1
		else
			array[row[i]] = 1
		end
	when 1, 3
		if array[row[i]] != nil
			array[row[i]] += row[2]
		else
			array[row[i]] = row[2]
		end
	else

	end
end

marray = array.max_by {|k, v| v}	


if type == 1 || 3
		print "#{marray[0]}, #{(marray[1].to_f).round(2)}\n"
elsif type == 2 || 4
	print "#{marray[0]}, #{marray[1]}\n"
end
