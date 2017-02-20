require 'crack'

XML_file = File.read(ARGV[0]);
JSON_file = File.read(ARGV[1]);

compare_xml = Crack::XML.parse(XML_file);
compare_json = Crack::JSON.parse(JSON_file);

puts compare_xml == compare_json ? 1 : 0