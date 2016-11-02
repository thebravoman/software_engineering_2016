class SRTParser 
	$one_number_pattern = "^(\\d+)$"
	$time_pattern = "(\\d+):(\\d+):(\\d+),(\\d+)\\s\-\-\>\\s(\\d+):(\\d+):(\\d+),(\\d+)"
	$empty_line_pattern = "(^$)"
	
	$subtitle_sentences_pattern = "([A-Z][\\w+~!@#$%^&()*{}\\[\\]|:><?\"\\/\\s+-]+\\.)"
	$word_pattern = "([\\w+~!@#$%^&()*{}\\[\\]|:><?\"\\/'-]+)"
	$symbol_pattern = "([~!@#$%^&()*{}\\[\\]|:><?\"\\/-])"
	
	$total_subtitles = 0
	$curr_duration_string = ""
	
	$return_hash = {
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
			
	def increase_words_count(words_count)
		$return_hash["number_of_words"] += words_count
	end
	
	def increase_symbols_count(symbols_count)
		$return_hash["number_of_symbols"] += symbols_count
	end
	
	def increase_lines_count()
		$return_hash["number_of_lines"] += 1
	end
	
	def increase_sentences_count(sentences_count)
		$return_hash["number_of_sentences"] += sentences_count
	end
	
	def set_duration()
		last_time = $curr_duration_string.split(" --> ")[1]
		hours, minutes, seconds_raw = last_time.split(":")
		seconds, miliseconds = seconds_raw.split(",")
		total_seconds = ((hours.to_i * 3600).to_f + (minutes.to_i * 60).to_f + (seconds.to_i).to_f + (miliseconds.to_f / 1000.0)).round()
		
		$return_hash["duration"] = total_seconds
	end
	
	def find_max_symbols_per_line(symbols_count)
		if $return_hash["max_symbols_per_line"] < symbols_count
			$return_hash["max_symbols_per_line"] = symbols_count
		end
	end

	def find_average_symbols()
		$return_hash["average_symbols_per_line"] = ($return_hash["number_of_symbols"].to_f / $return_hash["number_of_lines"].to_f).round(2)
		$return_hash["average_symbols_per_sentence"] = ($return_hash["number_of_symbols"].to_f / $return_hash["number_of_sentences"].to_f).round(2)
	end
	
	def find_average_duration()
		$return_hash["average_duration"] = ($return_hash["duration"].to_f / $total_subtitles.to_f).round(2)
	end
	
	def call_increasing_methods(text)	
		increase_words_count(text.scan(/#{$word_pattern}/).size())
		increase_symbols_count(text.scan(/#{$symbol_pattern}/).size())
		increase_sentences_count(text.scan(/#{$subtitle_sentences_pattern}/).size())
	end
	
	def call_average_methods()
		find_average_symbols()
		find_average_duration()
	end
	
	def parse_file(file)
		subtitle_text = "";
		prev_line = "";
		File.open(file).each do |line|
			if /#{$time_pattern}/.match(prev_line) != nil
				if /#{$empty_line_pattern}/.match(line) != nil
					call_increasing_methods(subtitle_text)
					subtitle_text = ""
					prev_line = ""
				else
					subtitle_text << line
					increase_lines_count()
					find_max_symbols_per_line(line.scan(/#{$symbol_pattern}/).size())
				end
			else
			 	if /#{$one_number_pattern}/.match(line) != nil
					$total_subtitles += 1
				elsif /#{$time_pattern}/.match(line) != nil
					prev_line = line
					$curr_duration_string = line
				end
			end
		end
		call_increasing_methods(subtitle_text)
		set_duration()
		call_average_methods()
	end
	
	def get_hash()
		$return_hash
	end
	
end
