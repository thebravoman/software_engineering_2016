require 'json'

json1 = ARGV[0].to_s
json2 = ARGV[1].to_s

helper1 = File.read(json1)
helper2 = File.read(json2)

parser1 = JSON.parse(helper1)
parser2 = JSON.parse(helper2)

if ( parser1 == parser2 )
  puts 1
else
  puts 0
end
