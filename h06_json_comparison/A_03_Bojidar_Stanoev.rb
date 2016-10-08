
require'json'

json1=File.read(ARGV[0])
json2=File.read(ARGV[1])
h1=Hash.new
h2=Hash.new
t=1.to_i
f=0.to_i
h1=JSON.parse(json1)
h2=JSON.parse(json2)

if(h1 == h2)
 puts t
else 
puts f
end

