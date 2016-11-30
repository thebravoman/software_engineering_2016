require 'rubygems'
require 'crack'
require 'json'

h1 = Hash[JSON.parse(Crack::XML.parse(File.read(ARGV[0])).to_json).sort]
h2 = Hash[JSON.parse(File.read(ARGV[1])).sort]

def get_all_keys(hash)
  hash.map do |k, v|
    Hash === v ? [k, get_all_keys(v)] : [k]
  end.flatten
end

num_of_keys = 0

get_all_keys(h1).each do |key|
    if get_all_keys(h2).include?(key)
        num_of_keys += 1
    end
end

puts num_of_keys ** 2
