require('crack')

puts Crack::XML.parse(File.read('./input.xml')) == Crack::JSON.parse(File.read('./input.json')) ? 1 : 0
