require 'json'

path1 = ARGV[0].to_s
path2 = ARGV[1].to_s

json = File.read(path1)
file1 = JSON.parse(json)
json = File.read(path2)
file2 = JSON.parse(json)
if(file1 == file2)
  puts 1
else
  puts 0
end
