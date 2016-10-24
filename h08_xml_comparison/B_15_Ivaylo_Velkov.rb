require 'crack'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

puts Crack::XML.parse(file1) == Crack::JSON.parse(file2) ? 1 : 0
