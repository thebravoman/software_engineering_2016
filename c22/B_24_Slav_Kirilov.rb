require 'json'
require 'csv'

json = JSON.parse(File.read(ARGV[1]))
csv = ARGV[0]

keys = json.keys
i = 0

CSV.foreach(csv) do |row|
    while (i < keys.count)
        if (row[1] == keys[i])
            keys.delete_at(i)
        end
        i += 1
    end
end

product = 1
i = 0
while(i < keys.count)
    product *= json.fetch(keys[i]).to_i
    i += 1
end

puts product
