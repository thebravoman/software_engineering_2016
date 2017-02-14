

require 'csv'
require 'json'



csv = ARGV[0].to_s
file2 = File.read(ARGV[1].to_s)
json = JSON.parse(file2)



result = 0;
sum=0;



json.each do |k, v|
	
	
	CSV.foreach(csv) do |row|
	
		if row[1] == k.min_by.to_i
		end
		
	end
	result = k;
	
end

puts result


#/*Develop a program named FirstName_LastName_ClassNumber_0123ec.rb

#1. you are given two command line arguments;
#1.1 if there are other arguments they should be discarded;
#1.2 The first argument is the full path of a CSV file with 4 columns
#1.3 The second argument is the full path of a JSON file

#2. Find the min of all the values in the JSON file where :   (ne se razbira) ->>>  -( Namerete minimuma na wsichite stoinosti w JSON FAYLA, kudeto
# the key of this value is contained in the value of any row on  column 2 (	- Kliuchut na tazi stoynsot se sudurja w stoinostta na koito i da e red na kolona 2 ot CSV FAYla
#from the CSV 
 
#3. Print only the result value
#*/
