# Develop a program named FirstName_LastName_ClassNumber_f325df.rb
#
# 1. you are given two command line arguments;
# 1.1 if there are other arguments they should be discarded;
# 1.2 The first argument is the full path of a CSV file with 4 columns
# 1.3 The second argument is the full path of a JSON file
#
# 2. Find the the min of all the values in the JSON file where :
#  the key of this value is contained in the value of any row on column 2 from the CSV
#
# 3. Print only the result value

require 'csv'
require 'json'

h = Hash[JSON.parse(File.read(ARGV[1]))]
min = ''

CSV.foreach(ARGV[0]) do |row|
  h.each do |k, v|
    if row[1] == k
      if min == ''
        min = v
      elsif min > v
        min = v
      end
    end
  end
end

if min == ''
  puts 0
else
  puts min
end
