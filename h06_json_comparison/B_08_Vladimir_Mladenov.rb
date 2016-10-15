require 'json'
puts JSON.parse(File.read(ARGV[0].to_s)) == JSON.parse(File.read(ARGV[1].to_s)) ? 1 : 0