require 'crack'

xml = File.read ARGV[0]
json = File.read ARGV[1]

puts Crack::XML.parse(xml) == Crack::JSON.parse(json) ? 1 : 0
