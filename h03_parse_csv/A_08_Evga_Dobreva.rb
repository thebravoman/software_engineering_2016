require "csv"

file=ARGV[0]
task=ARGV[1]
data=Hash.new(0)
stats=Hash.new(0)
Clip=0
Percent=1
	CSV.foreach(file) do |row|
		id=row[0]
		clip=row[1]
		percent=row[2]
		
		if (!data.has_key?(id))
	  		data[id]=Array.new(2) {Array.new(0)}
	  	end
	  	data[id].at(Clip).insert(0,clip)
	  	data[id].at(Percent).insert(0, percent.to_f)
	end
	
case task.to_i
when 1
	data.values.each { |row|
		clip=row.at(Clip)
		percent=row.at(Percent)
		clip.each_with_index { |i,j| 
		stats[clip.at(j)]=stats[clip.at(j)]+percent.at(j)
		}
	}
	data.each{ |id,value| 
		stats[id]=stats[id]+value.at(Percent).inject(:+)
	}
	puts "#{stats.key(stats.values.max)},#{sprintf("%.2f",stats.values.max)}"
when 2
	data.each_value{ |i| 
		i.at(Clip).each {|value| stats[value]=stats[value]+1}
	}
	puts "#{stats.key(stats.values.max)},#{stats.values.max}"
when 3
	data.each{ |id,value| 
		stats[id]=stats[id]+value.at(Percent).inject(:+)
	}
	puts "#{stats.key(stats.values.max)},#{sprintf("%.2f",stats.values.max)}"
when 4
	data.each{ |id,value| 
	stats[id]=stats[id]+value.at(Clip).length
	}
	puts "#{stats.key(stats.values.max)},#{stats.values.max}"
end
