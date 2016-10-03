require 'csv'

command = ARGV[1].to_i

def max_watch(dir = ARGV[0].to_s)
	videos = Hash.new()
	
	CSV.foreach(dir) do |row|
		if videos.assoc(row[1].to_i) == nil
			videos.store(row[1].to_i, 0)
		end
		videos[row[1].to_i] += row[2].to_f
	end
	
	videos.each() do |key, value|
		videos[key] = videos[key].round(2)
	end
	
	if videos[videos.key(videos.values.max)] % 1 != 0
		puts "#{videos.key(videos.values.max)},#{"%.2f" % videos[videos.key(videos.values.max)]}"
	else 
		puts "#{videos.key(videos.values.max)},#{videos[videos.key(videos.values.max)]}"
	end
end

def max_views(dir = ARGV[0].to_s)
	videos = Hash.new()

	CSV.foreach(dir) do |row|
		if videos.assoc(row[1].to_i) == nil
			videos.store(row[1].to_i, 0)
		end
		videos[row[1].to_i] += 1
	end

	if videos[videos.key(videos.values.max)] % 1 != 0
		puts "#{videos.key(videos.values.max)},#{"%.2f" % videos[videos.key(videos.values.max)]}"
	else 
		puts "#{videos.key(videos.values.max)},#{videos[videos.key(videos.values.max)]}"
	end
end

def max_watch_customer(dir = ARGV[0].to_s)
	customers = Hash.new()

	CSV.foreach(dir) do |row|
		if customers.assoc(row[0].to_i) == nil
			customers.store(row[0].to_i, 0)
		end

		customers[row[0].to_i] += row[2].to_f
	end	

	if customers[customers.key(customers.values.max)] % 1 != 0
		puts "#{customers.key(customers.values.max)},#{"%.2f" % customers[customers.key(customers.values.max)]}"
	else 
		puts "#{customers.key(customers.values.max)},#{customers[customers.key(customers.values.max)]}"
	end
end

def max_views_customer(dir = ARGV[0].to_s)
	customers = Hash.new()

	CSV.foreach(dir) do |row|
		if customers.assoc(row[0].to_i) == nil
			customers.store(row[0].to_i, 0)
		end

		customers[row[0].to_i] += 1
	end	

	if customers[customers.key(customers.values.max)] % 1 != 0
		puts "#{customers.key(customers.values.max)},#{"%.2f" % customers[customers.key(customers.values.max)]}"
	else 
		puts "#{customers.key(customers.values.max)},#{customers[customers.key(customers.values.max)]}"
	end
end


if command == 1
	max_watch()

elsif command == 2
	max_views()

elsif command == 3
	max_watch_customer()

elsif command == 4
	max_views_customer()
end