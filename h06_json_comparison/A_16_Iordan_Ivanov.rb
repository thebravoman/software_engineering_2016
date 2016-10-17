require 'json'

file1 = JSON.parse File.read ARGV[0]
file2 = JSON.parse File.read ARGV[1]

if file1 == file2
  p 1
else
  p 0
end
