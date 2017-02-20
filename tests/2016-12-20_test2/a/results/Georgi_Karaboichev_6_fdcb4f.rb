# Develop a program named FirstName_LastName_ClassNumber_fdcb4f.rb

# 1. you are given two arguments;
# 1.1 if there are other arguments they should be discarded;
# 1.2 The second argument is to a JSON file
# 1.3 The third argument is to an XML file
# 2. Find the number of nodes in the xml that have a name of 3 or less symbols and there are no keys in the JSON with such name
# 3. Calculate the sum of the symbols of all this nodes
# 4. Print only the result value

def get_xml_keys(xml)
    xml_keys = xml.scan(/<[^\/<>]+>/)
    xml_keys.each do |xml_key|
        xml_key.gsub!('<', '')
        xml_key.gsub!('>', '')
    end

    return xml_keys
end

def get_json_keys(json)
    json_keys = json.scan(/"[^ "]+":/)
    json_keys.each do |key|
        key.gsub!('"', '')
        key.gsub!(':', '')
    end

    return json_keys
end

json = File.read(ARGV[1])
xml = File.read(ARGV[2])

xml_keys = get_xml_keys(xml)
json_keys = get_json_keys(json)

sum_symbols = 0
xml_keys.each do |xml_key|
    has_equal_keys = false
    json_keys.each do |json_key|
        if(json_key == xml_key)
            has_equal_keys = true
        end
    end
    if(!has_equal_keys && xml_key.length <= 3)
        sum_symbols += xml_key.length
    end
end

puts sum_symbols









