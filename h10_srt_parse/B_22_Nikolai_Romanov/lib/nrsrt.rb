class SRTParse
	def time_in_seconds(line)
		time = 0
		seconds = 0.00
		line = line.gsub(/,/, ".")
		line = line.gsub(/--> /, ':')
		time = line.split(/:/)
		seconds += (time[4] > time[1] || time[3] > time[0]) ? 60 + (time[5].to_f.round() - time[2].to_f.round()) : time[5].to_f.round() - time[2].to_f.round()
		return seconds
	end 
	def parse_file(location)
		halloween = Hash.new(0)
		subs = 0
		File.open("file.txt", "r") do |read|
			read.each_line do |line|
				if line.match(/--> /) 
					seconds += time_in_seconds(line)
					subs += 1
				end
				halloween["number_of_words"] += line.scan(/[A-Za-z]+/).size 
				halloween["number_of_symbols"] += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
				halloween["number_of_lines"] += 1
				if
					halloween["max_symbols_per_line"] < line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
					halloween["max_symbols_per_line"] = line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
				end
				halloween["number_of_sentences"] += line.split(/[^\.?!][\.?!]/).size - 1
			end
		end
	halloween["average_symbols_per_line"] = halloween["number_of_symbols"]/halloween["number_of_lines"].round(2)
	halloween["average_symbols_per_sentence"] = halloween["number_of_symbols"]/halloween["number_of_sentences"].round(2)
	halloween["duration"] = seconds.round()
	halloween["average_duration"] = (seconds.round / subs).round(2)
	return halloween
	end
end

