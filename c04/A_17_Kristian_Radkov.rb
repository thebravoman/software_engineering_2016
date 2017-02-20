require 'csv'

i = 0

CSV.foreach("/Users/Zax/Documents/TUES/data.csv") do |row|
  Array[i][i] = row
  i++


  puts("#{Array[i][i]}")
end