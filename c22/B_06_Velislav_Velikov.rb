# ruby is love, ruby is life!!
require 'csv'
require 'json'

csv=ARGV[0].to_s
json=ARGV[1].to_s
product = 1
present = false
json_parsed=JSON.parse(File.read(json))
json_parsed.each do |key, value|
 CSV.foreach(csv) do |row|
 present = false
 	if key.to_s == row[1].to_s
 		present = true
 		break
  	end 
  end
  if present==false
  	product*= value.to_i 
  	end
end

puts product
