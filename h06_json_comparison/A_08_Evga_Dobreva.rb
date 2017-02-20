require "json"

json1=File.read(ARGV[0].to_s)
json2=File.read(ARGV[1].to_s)

json_file1=JSON.parse(json1)
json_file2=JSON.parse(json2)

if (json_file1==json_file2)
	puts 1
else
	puts 0
end
