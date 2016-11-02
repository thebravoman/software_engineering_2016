require 'json'

first_json_file = File.read(ARGV[0])
second_json_file = File.read(ARGV[1])

first_json_file_hash = JSON.parse(first_json_file)
second_json_file_hash = JSON.parse(second_json_file)

if first_json_file_hash == second_json_file_hash then puts 1
else puts 0
end
