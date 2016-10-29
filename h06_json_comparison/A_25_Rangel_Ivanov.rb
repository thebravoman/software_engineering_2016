require'json'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

puts JSON.parse(file1) == JSON.parse(file2) ? 1 : 0
