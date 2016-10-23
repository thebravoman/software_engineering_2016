require "json"
require "xmlsimple"

xmlData = XmlSimple.xml_in(File.read(ARGV[0]), {'KeyAttr' => 'name', "ForceArray" => false, "KeepRoot" => true})
jsonData = JSON.parse(File.read(ARGV[1]))

puts xmlData == jsonData ? 1 : 0
