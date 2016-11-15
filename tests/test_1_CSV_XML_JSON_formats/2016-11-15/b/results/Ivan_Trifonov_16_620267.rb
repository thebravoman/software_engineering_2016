require 'csv'
require 'json'

csv = ARGV[0]
json = (ARGV[1])
data =Hash.new()
count = 0
number_of_values =0
data1=JSON.parse(File.read(json))
CSV.foreach(csv) do |row|
		if(	data1[count] != data[row[1])
			number_of_values += 1;
		end
		count +=1;
end			
