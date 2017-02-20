require 'json'
if JSON.parse(File.read(ARGV[0])) == JSON.parse(File.read(ARGV[1]))
  p 1
else
  p 0
end
