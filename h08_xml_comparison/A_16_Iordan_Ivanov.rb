require "json"
require "xmlsimple"

xmlparse = XmlSimple.xml_in(File.read(ARGV[0]))
jsonparse = JSON.parse(File.read(ARGV[1]))

if xmlparse == jsonparse
  p 1
else
  p 0
end
