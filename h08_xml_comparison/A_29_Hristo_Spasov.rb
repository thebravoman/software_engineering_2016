require "crack"

xml_data = Crack::XML.parse(File.read(ARGV[0]));
json_data = Crack::JSON.parse(File.read(ARGV[1]));
xml_data == json_data ?
  puts(1) : puts(0)
