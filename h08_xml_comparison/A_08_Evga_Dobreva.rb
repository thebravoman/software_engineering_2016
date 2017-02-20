require "rubygems"
require "json"
require "crack"

xml_file=Hash[(Crack::XML.parse(File.read(ARGV[0])))]
json_file=Hash[JSON.parse(File.read(ARGV[1]))]

if (xml_file!=json_file)
	puts 0
else
	puts 1
end

