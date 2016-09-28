require 'csv'

user = {}

directory = ARGV[0]
csv = CSV.open("texty.csv", "w")
$count = 0 
Dir.foreach(directory) do |file|

name,video,persentage = row
user{name} = video,persentage 
 
end
end
puts user
