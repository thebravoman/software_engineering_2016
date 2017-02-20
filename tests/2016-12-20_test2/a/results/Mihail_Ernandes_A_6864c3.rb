/Develop a program named FirstName_LastName_ClassNumber_6864c3.rb

1. you are given two command line arguments;
1.1 if there are other arguments they should be discarded;
1.2 The first argument is the full path of a CSV file with 4 columns
1.3 The second argument is the full path of a JSON file

2. Find the the min of all the values in the JSON file where :
 the key of this value is contained in the value of any row on column 2 from the CSV 
 
3. Print only the result value/

require 'json'
require 'csv'
 
old = 0
min = 0
passed_keys = []

 
hash = JSON.parse(File.read(ARGV[1]));
 
CSV.foreach(ARGV[0]) do |row|
  key = row[1]
  if hash.has_key?(key) and !passed_keys.include? key
          old = hash[key].to_i
          passed_keys << key
          if min < old 
          	min = old
          end
  end
end

if passed_keys.any?
	print min
end
