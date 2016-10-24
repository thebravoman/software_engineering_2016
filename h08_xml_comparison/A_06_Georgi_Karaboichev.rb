require "json"
require "crack"

xml = Crack::XML.parse(File.read(ARGV[0]))
json = Crack::JSON.parse(File.read(ARGV[1]))

if xml == json
    puts 1
else
    puts 0
end
