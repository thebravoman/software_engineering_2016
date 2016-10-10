require 'json';

NOne = JSON.parse(File.read(ARGV[0]))
NTwo = JSON.parse(File.read(ARGV[1]))

if(NOne == NTwo)
    puts 1
else
    puts 0
end
