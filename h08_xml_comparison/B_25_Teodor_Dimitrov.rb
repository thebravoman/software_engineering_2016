require 'crack'

file1, file2 = File.read(ARGV[0]), File.read(ARGV[1])

first_file = Crack::XML.parse(file1);
second_file = Crack::JSON.parse(file2);

puts first_file == second_file ? 1 : 0
