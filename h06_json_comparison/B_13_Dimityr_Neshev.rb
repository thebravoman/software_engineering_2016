require 'crack'

file_1 = File.read(ARGV[0])
file_2 = File.read(ARGV[1])

puts Crack::JSON.parse(file_1) != Crack::JSON.parse(file_2) ? 0 : 1

