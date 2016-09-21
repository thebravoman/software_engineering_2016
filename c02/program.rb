# encoding: utf-8

def count_files (dir) 
	count = 0
	pattern = /^[A|B]_[0-9]+_[A-Za-z]+_[A-Za-z]+.txt$/
	
	
	Dir.foreach(dir) do |file|
	next if !pattern.match(file) 
	puts file.gsub('_', ', ').gsub('.txt', '')
	end
end
count_files("c01_introduction")

