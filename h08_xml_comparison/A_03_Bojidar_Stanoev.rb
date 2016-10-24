gem 'crack'
require "rubygems"
require "crack"
require'json'

xml=Hash.new
xml=Crack::XML.parse(File.read(ARGV[0]))
json=File.read(ARGV[1])
t=1.to_i
f=0.to_i
h1=JSON.parse(json)


if(h1==xml)
 puts t
else 
puts f
end

