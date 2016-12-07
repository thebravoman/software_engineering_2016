directoryWay = ARGV[0];
files = Dir.glob(directoryWay);

puts files.count();

files.each do |file|
	puts file.gsub("_", ",");
end

puts files
File.write("result.csv", files);
