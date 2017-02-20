require 'json'
require 'csv'


file_csv=ARGV[0]
file_json=JSON.parse(File.read(ARGV[1]))
keys=file_json.keys
values=file_json.values
i=0
product = 1
#nth = 0
while(i<keys.count)
		CSV.foreach(file_csv) do |row|
			if row[1] != keys[i]
				 p product
				 p values[i].to_i
				 p row[1]
				 p keys[i]

				 product = product * values[i].to_i
				 p "new product:" + product.to_s
				 puts 
				 nth = 1;
			end
		end
		i+=1
end

#if nth == 1
	puts product
#else
#	puts nth
#end
