require 'json'

j1 = File.read(ARGV[0])
j2 = File.read(ARGV[1])
h1 = JSON.parse!(j1)
h2 = JSON.parse!(j2)

if ( h1!=h2 )
  puts 0
else
  puts 1
end
