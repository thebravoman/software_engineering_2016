json = File.read(ARGV[1])
xml = File.read(ARGV[2])

def getJsonKeys(json)
    jsonKeys = json.scan(/"[^ "]+":/)
    jsonKeys.each do |key|
        key.gsub!('"', '')
        key.gsub!(':', '')
    end

    return jsonKeys
end

def getXmlKeys(xml)
    xmlKeys = xml.scan(/<[^\/<>]+>/)
    xmlKeys.each do |xml_key|
        xml_key.gsub!('<', '')
        xml_key.gsub!('>', '')
    end

    return xmlKeys
end

result = 0

all_json_keys = getJsonKeys(json)
all_xml_keys = getXmlKeys(xml)

all_xml_keys.each do |node|
    all_json_keys.each do |key|
        if node == key
            result += 1
        end
    end
end

puts result*result
