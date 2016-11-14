class SRTParser

		$srt_parsed_hash = Hash.new

		$srt_parsed_hash["number_of_words"] = 0
		$srt_parsed_hash["number_of_symbols"] = 0 
		$srt_parsed_hash["number_of_lines"] = 0 
		$srt_parsed_hash["average_symbols_per_line"] = 0.00 
		$srt_parsed_hash["max_symbols_per_line"] = 0 
		$srt_parsed_hash["number_of_sentences"] = 0
		$srt_parsed_hash["average_symbols_per_sentence"] = 0.00 
		$srt_parsed_hash["duration"] = 0 
		$srt_parsed_hash["average_duration"] = 0.00

		$match_words = /[A-Za-z]+'?[A-Za-z]+/
		$match_symbols = /[~!@#$%^&*\(\)\-\{\}\[\]\|”:><?\/]/
		$match_sentences = /([A-Z][^\.!?]+)[\.!?]/
		$not_blank_line = /\S/


	def number_of_words(line)

		$srt_parsed_hash["number_of_words"] += (line.scan($match_words)).size
	end

	def number_of_symbols(line)

		$srt_parsed_hash["number_of_symbols"] += (line.scan($match_symbols)).size
	end  

	def symbols_per_line(line)

		symbols = (line.scan($match_symbols)).size
	end  

	def number_of_lines(line)
				
		$srt_parsed_hash["number_of_lines"] += 1	
	end

	def average_symbols_per_line(symbols, lines)

		$srt_parsed_hash["average_symbols_per_line"] = ((symbols).round(2) / lines).round(2)
	end

	def max_symbols_per_line(symbols_per_line, line)
	
		if($srt_parsed_hash["max_symbols_per_line"] < symbols_per_line.call(line))
			
			$srt_parsed_hash["max_symbols_per_line"] = symbols_per_line.call(line)	
		end
	end

	def number_of_sentences(subtitles)
		
		$srt_parsed_hash["number_of_sentences"] += (subtitles.scan($match_sentences)).size
	end 
	
	def average_symbols_per_sentence(symbols, sentences)
		
		$srt_parsed_hash["average_symbols_per_sentence"] = (symbols.round(2) / sentences).round(2)
	end

	def duration_of_subtitles(line)

		time = line.split("--> ")

		end_time = time[1].split(":")

		hours_to_seconds = (end_time[0].to_i) * 3600

		minutes_to_seconds = (end_time[1].to_i) * 60
		
		sec_and_milisec = end_time[2].split(",")
		
		seconds = sec_and_milisec[0].to_i

		miliseconds_to_seconds = (sec_and_milisec[1].to_f) / 1000

		duration_in_seconds = hours_to_seconds + minutes_to_seconds + seconds + miliseconds_to_seconds
		
		$srt_parsed_hash["duration"] = duration_in_seconds.round 
	end

	def average_duration(duration, line, number_of_subtitles)
	
		$srt_parsed_hash["average_duration"] = duration.call(line) / number_of_subtitles.round(2)

		$srt_parsed_hash["average_duration"] = $srt_parsed_hash["average_duration"].round(2)
	end

	def parse_file(path_to_file)
		
		is_subtitle = false
		
		srt_file = File.read(path_to_file)

		number_of_subtitles = 0

		subtitles = ""

		srt_file.each_line do |line|

			if(line.include? "-->")
				
				is_subtitle = true

				number_of_subtitles += 1

				duration_of_subtitles(line)
	
				average_duration(method(:duration_of_subtitles), line, number_of_subtitles)

			elsif($not_blank_line !~ line)
				
				is_subtitle = false

			elsif(is_subtitle == true)
			
				subtitles << line

				number_of_lines(line)

				number_of_words(line)

				number_of_symbols(line)

				max_symbols_per_line(method(:symbols_per_line), line)

			end
		end
		
		average_symbols_per_line($srt_parsed_hash["number_of_symbols"],
					 $srt_parsed_hash["number_of_lines"])

		number_of_sentences(subtitles)

		average_symbols_per_sentence($srt_parsed_hash["number_of_symbols"],
					     $srt_parsed_hash["number_of_sentences"])

		
		return $srt_parsed_hash
	end 

	

	
end 
