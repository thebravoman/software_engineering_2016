require 'csv'
require 'json'
require 'crack'

csv_file = ARGV[0]
json_file = File.read(ARGV[1])
csv_hash = CSV.parse(csv_file)
counter = 0
total = 0
count = 0

CSV.foreach(csv_file) do |row|
counter += 1
end

parsed_json = JSON.parse(json_file)

while (count < counter)

if parsed_json[count] != csv_hash[1] then total += parsed_json

end
end

puts total
