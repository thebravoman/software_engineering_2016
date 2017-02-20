require 'csv'


DIGIT_CONST = /\d/

result=1
i=0
CSV.foreach(ARGV[0]) do |row|
    if(i!=0)
        if(row[0].to_i < row[3].to_i )
              if(row[2].to_i == row[3].to_i + 3 )
				if(row[2].match(DIGIT_CONST))
              		result= result * row[2].to_i
				end
              end
        end
    end

    i=i+1
end
puts result




#Develop a program named FirstName_LastName_ClassNumber_13d65e.rb

#1. you are given an argument that is the full path to CSV file
#1.1 if there are other arguments they should be discarded
#2. The CSV file has four columns
#3. The first row of the CSV are the headers with the following names

#		C1, C2, C3, C4

#4. Find the product of all the values for column C3 
#	where 
#	C1 < C4
#	and 
#	C3 = C4+3

#5. Print only the result value
