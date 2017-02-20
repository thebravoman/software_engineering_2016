require 'crack'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

file_one= Crack::XML.parse(file1);
file_two = Crack::JSON.parse(file2);

 if(file_one != file_two)
	print("0");

   else print("1");

end
