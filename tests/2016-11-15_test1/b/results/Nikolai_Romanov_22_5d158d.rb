require 'csv'
require 'json'
csv_path = ARGV[0].to_s
json_path = ARGV[1].to_s
json_data = JSON.parse(File.read(json_path))
CSV.foreach(csv_path) do |row|
info=row[1]
end
if(json_data[info] != info) then puts info end
