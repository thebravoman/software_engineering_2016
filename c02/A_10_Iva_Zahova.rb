#!/usr/bin/ruby
require "csv"

dir = ARGV[0]
puts Dir[File.join(dir, '**', '*')].count { |file| File.file?(file) }

Dir.foreach(dir) do |item|
  next if item == '.' or item == '..'
  puts item
end

CSV.open("result.csv", "w") do |csv|
	Dir.foreach(dir) do |item|
	  next if item == '.' or item == '..'
	  csv << item.split("_")
	end
end
