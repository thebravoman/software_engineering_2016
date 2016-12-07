require "json"

cmp1 = JSON.parse(File.read(ARGV[0]))
cmp2 = JSON.parse(File.read(ARGV[1]))

print cmp1 == cmp2 ? 1 : 0
