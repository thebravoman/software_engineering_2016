require 'json'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])
parse1 = JSON.parse!(file1)
parse2 = JSON.parse!(file2)

if  parse1 == parse2
  puts 1
else
  puts 0
end
