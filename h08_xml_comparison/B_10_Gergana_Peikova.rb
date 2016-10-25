require "rubygems"
require "crack"
require "json"

xml_file = Crack::XML.parse(File.read(ARGV[0]));
json_file = Crack::JSON.parse(File.read(ARGV[1]));

	if hml_file != json_file
		puts "0"
	else
		puts "1"
        end


