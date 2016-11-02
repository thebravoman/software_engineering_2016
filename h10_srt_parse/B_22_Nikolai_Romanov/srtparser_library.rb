class SRTParser
	def time_in_seconds(line)
		time = 0
		line = line.gsub(/,/, ".")
		line = line.gsub(/--> /, ':')
		time = line.split(/:/)
		secs = time[3].to_i * 3600 + time[4].to_i * 60 + time[5].to_f
		return secs
	end 
	def parse_file(location)
		halloween = Hash.new(0)
		seconds = 0
		subs = 0
		File.open(location, "r") do |read|
			read.each_line do |line|
				if line.match(/--> /) 
					seconds += time_in_seconds(line)
					subs += 1
				end
				halloween["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.size
				halloween["number_of_symbols"] += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
				halloween["number_of_lines"] += 1
				if
					halloween["max_symbols_per_line"] < line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
					halloween["max_symbols_per_line"] = line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
				end
				halloween["number_of_sentences"] += line.split(/[^\.?!][\.?!]/).size
			end
		end
	halloween["average_symbols_per_line"] = halloween["number_of_symbols"]/halloween["number_of_lines"].to_f.round(2)
	halloween["average_symbols_per_sentence"] = halloween["number_of_symbols"]/halloween["number_of_sentences"].to_f.round(2)
	halloween["duration"] = seconds.to_f.round(2)
	halloween["average_duration"] = (seconds.round / subs).to_f.round(2)
	return halloween
	end
end
