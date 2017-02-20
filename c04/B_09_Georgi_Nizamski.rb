require 'csv'

#load file
array = Array.new() {Array.new()}
CSV.foreach('/home/elsyser/Desktop/data2.csv') do |row|
  array = row
  puts array
end
