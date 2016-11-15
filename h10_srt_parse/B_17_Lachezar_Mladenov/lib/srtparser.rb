class SRTParser

	$symbol_pattern = /([~!@#$%^&*(){}\[\]|”:><?\/-])/
	$time_pattern = /^(\d+):(\d+):(\d+),(\d+).*?(\d+):(\d+):(\d+),(\d+)$/
	$only_number = /^(\d+)$/
	$subtitles_pattern = /([A-Za-z][A-Za-z,'\s+\.!?]*)/
	$sentence_pattern = /([A-Z][\w,\d+\s+,~@#$%^&*()\-{}\[\]|”:><\/]+[.?!])/
	
	$result = {
		"number_of_words" => 0, 
		"number_of_symbols" => 0, 
		"number_of_lines" => 0, 
		"average_symbols_per_line" => 0.00, 
		"max_symbols_per_line" => 0, 
		"number_of_sentences" => 0, 
		"average_symbols_per_sentence" => 0.00, 
		"duration" => 0, 
		"average_duration" => 0.00
	}
	
	def parse_file(path_to_file)	
		total_subtitles = 0;
		subtitles = ""
		
		File.open(path_to_file).each do |line|
			
			if $time_pattern.match(line)
				$result["duration"] = duration($time_pattern.match(line))
			
			elsif $only_number.match(line)
				total_subtitles = line.to_i
			elsif $subtitles_pattern.match(line)	
				subtitles << line
			end
			
		end
		initialization_methods(subtitles)
		$result["average_duration"] = average_duration(total_subtitles, $result["duration"])
		
		return $result
				
	end
	
	def initialization_methods(subtitles)
		$result["number_of_words"] = number_of_words(subtitles)
		$result["number_of_symbols"] = number_of_symbols(subtitles)
		$result["number_of_lines"] = number_of_lines(subtitles)
		$result["average_symbols_per_line"] = average_sumbols_per_line(subtitles)
		$result["max_symbols_per_line"] = max_symbols_per_line(subtitles)
		$result["number_of_sentences"] = number_of_sentences(subtitles)
		$result["average_symbols_per_sentence"] = average_symbols_per_sentence(subtitles)
	end
	
	def number_of_words(subtitles)
		words = subtitles.split(" ")
		return words.size
	end
	
	def number_of_symbols(subtitles)
		symbols = subtitles.scan($symbol_pattern)
		return symbols.size
	end
	
	def number_of_lines(subtitles)
		lines = subtitles.split("\n")
		return lines.size
	end
	
	def average_sumbols_per_line(subtitles)
		result = number_of_symbols(subtitles).to_f / number_of_lines(subtitles).to_f
		return result.round(2)
	end
	
	def max_symbols_per_line(subtitles)
		max_symbols = 0
		subtitles.each_line do |line|
			current_symbols = line.scan($symbol_pattern).size
			if current_symbols > max_symbols
				max_symbols = current_symbols
			end		
		end
		
		return max_symbols
	end
	
	def number_of_sentences(subtitles)
		sentences_count = subtitles.scan($sentence_pattern).size
		return sentences_count
	end
	
	def average_symbols_per_sentence(subtitles)
		average = number_of_symbols(subtitles).to_f / number_of_sentences(subtitles).to_f
		return average.round(2)
	end
	
	def duration(time)
		hours, mins, secs, mili_secs = time[5], time[6], time[7], time[8]
		
		total_seconds = ((hours.to_i * 3600).to_f + (mins.to_i * 60).to_f + 
		(secs.to_i).to_f + (mili_secs.to_f / 1000.0)).round()
		
		return total_seconds
		
	end
	
	def average_duration(subtitles, duration)
		average = duration.to_f / subtitles.to_f
		return average.round(2)
	end

end
