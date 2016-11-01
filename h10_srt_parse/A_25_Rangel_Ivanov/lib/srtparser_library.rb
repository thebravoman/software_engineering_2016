require 'mathn'
class SRTParser	
	def parse_file(path_to_file)
		data = Hash.new(0)
		File.open(path_to_file, "r") do |read|
			read.each_line do |line|
				data["number_of_words"] += line.scan(/[A-Za-z]+/).size 
				data["number_of_symbols"] += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
				data["number_of_lines"] += 1
				if data["max_symbols_per_line"] < line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size 
					data["max_symbols_per_line"] = line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size	
				end
				data["number_of_sentences"] += line.split(/([A-Z][^\.!?]+)[\.?!]/).size
				if (/-->/).match(line) then hash_d = Hash[ [:from, :to].zip(line.gsub!(" ","").chop.split(/-->/)) ] 
				end
				if /\b\d\b/.match(line) then count += 1 
				end
			end
		end
	data["average_symbols_per_line"] = (data["number_of_symbols"]/data["number_of_lines"]).round(2)
	data["average_symbols_per_sentence"] = (data["number_of_symbols"]/data["number_of_sentences"]).round(2)
	data["average_duration"] = (data["duration"].to_f/count.to_i).round(2)
	data["duration"] = hash_d[:to]
	return data
	end
end
