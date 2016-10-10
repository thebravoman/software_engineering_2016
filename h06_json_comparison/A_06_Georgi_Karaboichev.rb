require 'json';

first_json = JSON.parse(File.read(ARGV[0]))
second_json = JSON.parse(File.read(ARGV[1]))

if(first_json == second_json)
    puts 1
else
    puts 0
end
