require "rubygems"
require "json"
require "crack"

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])
if (Crack::XML.parse file1) == (Crack::JSON.parse file2)
    puts 1
else
    puts 0
    end
