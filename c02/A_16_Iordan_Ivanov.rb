dir = gets
dir = dir.chomp
puts Dir[File.join(dir,'**','*')].count{|file| File.file?(file) }
myfile = File.new("results.csv", "w")
myfile.puts(Dir.entries(dir).select { |f| File.file?(f) && !File.basename })
