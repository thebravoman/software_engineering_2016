class SRTParse

	
	def find_avarages(result)
		result["average_symbols_per_line"] = (result["number_of_symbols"].to_f/result["number_of_lines"]).round(2)
		result["average_symbols_per_sentence"] = (result["number_of_symbols"].to_f/result["number_of_sentences"]).round(2)
		result["average_duration"] = (result["duration"]/result["number_of_subtitles"]).round(2)
		return result
	end
	





	def duration(line)
		timestamp = line.split("-->")
		time_from = timestamp.first.gsub(/,/,".").split(":").last.to_f.round()
		time_to = timestamp.last.gsub(/,/,".").split(":").last.to_f.round()
		duration = time_to - time_from + (time_to < time_from ? 60 : 0)
		return duration
	end




	
	def max_symbols_per_line(line, max_symbols)
		current_line_symbols = line.scan(/[[:punct:]]/).count
		if current_line_symbols > max_symbols then
			return current_line_symbols
		else
			return max_symbols
		end
	end




def parse_file(path_to_file)
		result = Hash.new(0)
		endlines = 0

		File.open(path_to_file, "r") do |infile|
			infile.each_line do |line|
				if line =~ /^[\s]*$\n/ then
					endlines = 0
					next
				end
				
				if endlines == 0 then
					result["number_of_subtitles"] = line.to_i
				else if endlines ==1 then 
					result["duration"] += duration(line)
				else 
					result["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.length
					result["number_of_symbols"] += line.scan(/[[:punct:]]/).count
					result["number_of_lines"] += 1
					result["max_symbols_per_line"] = max_symbols_per_line( line, result["max_symbols_per_line"])
					result["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).count
				end
				endlines = endlines + 1

				
			end
		end 
		return find_avarages(result)
	end


	
end 
