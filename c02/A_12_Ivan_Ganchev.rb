basedir = ARGV[0]
contains = Dir.new(basedir).entries

contains.each do |file|
	file.slice! ".txt" 
	puts file.gsub('_', ',')
end
