require 'csv'

command = ARGV[1].to_i

def max_watch(dir = ARGV[0].to_s, index) #index equals 1 if the object is videos and 0 if the object is customers
	hash_object = Hash.new() #object for either video or customer
	
	CSV.foreach(dir) do |row|
		store_key(hash_object, row, index)
		hash_object[row[index].to_i] += row[2].to_f
	end
	
	hash_object.each() do |key, value|
		hash_object[key] = hash_object[key].round(2)
	end
	
	print(hash_object)
end

def max_views(dir = ARGV[0].to_s, index) #index equals 1 if the object is videos and 0 if the object is customers
	hash_object = Hash.new() #object for either video or customer

	CSV.foreach(dir) do |row|
		store_key(hash_object, row, index)
		hash_object[row[index].to_i] += 1
	end
	
	print(hash_object)
end

def store_key(hash_object, row, index) #stores key in hash if it is not existing
	if hash_object.assoc(row[index].to_i) == nil
		hash_object.store(row[index].to_i, 0)
	end
end

def print(hash_object) 
	if hash_object[hash_object.key(hash_object.values.max)] % 1 != 0
		puts "#{hash_object.key(hash_object.values.max)},#{"%.2f" % hash_object[hash_object.key(hash_object.values.max)]}"
	else 
		puts "#{hash_object.key(hash_object.values.max)},#{hash_object[hash_object.key(hash_object.values.max)]}"
	end
end

command % 2 == 0 ? max_views(command == 2 ? 1 : 0) : max_watch(command == 1 ? 1 : 0)
