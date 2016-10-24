require 'json'
require 'active_support/all'

if Hash.from_xml(File.read(ARGV[0])).to_json == JSON.parse(File.read(ARGV[1]))
	p 1
else
	p 0
end

