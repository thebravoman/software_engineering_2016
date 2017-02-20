require "json"
require "crack"

#Switch over to crack because closing element on new line added a key 'content' containing '\n' every time feelsbadman

xmlData = Crack::XML.parse(File.read(ARGV[0]))
jsonData = JSON.parse(File.read(ARGV[1]))

puts xmlData == jsonData ? 1 : 0
