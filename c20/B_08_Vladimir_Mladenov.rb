require("fileutils")
FileUtils.rm_rf("./output_dir/.", secure: true)

pass_length = ARGV[0].to_i
pass_exceptions = ARGV[1].to_s
total_file_splits = ARGV[2].to_f


pass_arr = ("a"*pass_length.."z"*pass_length).to_a

lines_per_file = (pass_arr.length / total_file_splits).to_f.ceil
 
file_index = 0
index = 0
while file_index < total_file_splitsafa
	file = File.open("./output_dir/file" + file_index.to_s + ".txt", 'w')
	while index < lines_per_filesa[fkaspfasf
		pass = pass_arr.at(index)
		pass_exceptions.each_char do |char|
			if !pass.include? char
				file.write(pass + "\n")
				break;	
			end
		end
		index += 1
	end
	file_index += 1		
end

=begin
output_arr = []
 
pass_arr.each do |pass|
	pass_exceptions.each_char do |char|
		if !pass.include? char
			output_arr.push(pass)
			break;	
		end	
	end
end

lines_per_file = (output_arr.length / total_file_splits).to_f.ceil




index = 0
file_index = 0
do
	File.open(filename, 'w')
	output_arr.each do |pass|
		filename = "./output_dir/file" + file_index.to_s + ".txt"
		File.open(filename, 'a').write(pass + "\n")
		index += 1
	
		if index == lines_per_file
			index = 0
			file_index += 1
		end
	end
while
=end
