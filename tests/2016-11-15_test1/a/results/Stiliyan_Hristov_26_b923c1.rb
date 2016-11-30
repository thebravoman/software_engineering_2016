#Develop a program named FirstName_LastName_ClassNumber_b923c1.rb

#1. you are given an argument that is the full path to CSV file
#1.1 if there are other arguments they should be discarded
#2. The CSV file has four columns
#3. The first row of the CSV are the headers with the following names

#		C1, C2, C3, C4

#4. Find the sum of all the values for column C3
#	where
#	C1 > 17
#	and
#	C2 is not a digit

#5. Print only the result value



require 'csv'


class String
  def is_integer?
    self.to_i.to_s == self
  end
end


sum = 0

CSV.foreach(ARGV[0], { :headers => true}) do |row|
  c1 = row[0].to_i
  c2 = row[1].to_s
  c3 = row[2].to_i


  if c1 > 17 and !c2.is_integer?
    sum += c3
  end
end

puts sum
