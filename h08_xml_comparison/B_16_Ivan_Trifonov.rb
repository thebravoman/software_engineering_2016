require 'crack'

puts (Crack::XML.parse(File.read(ARGV[0])) == Crack::JSON.parse(File.read(ARGV[1]))) ? "1" : "0"
