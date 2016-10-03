require "csv"

dir = ARGV[0]
command = ARGV[1].to_i

stats = Hash.new
results = Hash.new(0)
shkendzi = Hash.new(0)

CSV.foreach(dir) do |row|
	user, video, percent = row[0], row[1], row[2]

    if !stats.has_key?(user)
  		stats[user] =  Array.new(2) { Array.new(0) }
  	end

  	 stats[user][0].insert(0, video)
	 stats[user][1].insert(0, percent.to_f)
end


if command == 2
	stats.each_value{ |value| value[0].each{ |stoinost| results[stoinost] += 1}}

	end

if command == 4
	stats.each{ |key, value| results[key] += value[0].length}
	end

CSV.foreach(dir) do |row|
	case command 
		when 1 
			shkendzi[row[1]] = (shkendzi[row[1]]).to_f + row[2].to_f
		when 3
			shkendzi[row[0]] = (shkendzi[row[0]]).to_f + row[2].to_f
	end
end
#puts("#{shkendzivaluesmax}, #{shkendzi.values.max}")
if command == 1 || command == 3
	shkendzivaluesmax = (shkendzi.values.max).round(2)
	puts("#{shkendzi.key(shkendzi.values.max)},#{shkendzivaluesmax}")
	#printf("%s,%f\n", shkendzi.key(shkendzi.values.max), shkendzivaluesmax)
	#puts "#{results.key(results.values.max)},#{sprintf("%.2f", results.values.max)}"
elsif command == 2 || command == 4
	#results.each_value{ |test| if test == results.values.max puts"#{results.key(results.values[test])},#{results.values[test]}"}
	puts "#{results.key(results.values.max)},#{results.values.max}"
end
