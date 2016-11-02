require "srtparser_library/version"

module SrtparserLibrary
	def get_words(file)
		return file.scan(/[A-Z']+/i)
	end

	def get_all_symbols(lines)
		symbol_counter = 0

		lines.each do |line|
    		symbol_counter += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?]/).length 
    	end

   	 	return symbol_counter
	end

	def get_symbols(line)
		return line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?]/).length
	end

	def get_lines(subtitles)
		line_counter = 0
		array = Array.new
		subtitles.each_line do |line|
			if line.match(/^[%~!@#$%^&*()\-{}\[\]|”:><?\/A-Z., ']+/i)
				array.push(line)
			end
		end
		return array
	end

	def get_max_symbols(subtitles)
		lines = get_lines(subtitles)
		temp = 0
		max = 0

		lines.each do |line|   
	        current = get_symbols(line)

	        if(max < current)
	            max = current
	        end 
	    end
		return max
	end

	def get_number_of_sentences(subtitles)
		return subtitles.scan(/[A-Z][^.?!]+[.?!]/m)
	end

	def get_all_durations(subtitles)
	    seconds = Array.new
	    durations = subtitles.scan(/[\d]{2}+:[\d]{2}+:[\d]{2}+,[\d]{3}+/)

	    durations.each do |duration|
	        times = duration.split(':')

	        time = 0
	        multiplier = 3600
	        duration_in_seconds = 0.0
	        times.each do |time|
	            time = time.gsub(',', '.')
	            duration_in_seconds += time.to_f * multiplier.to_f  
	            multiplier /= 60.0
	        end

	        duration_in_seconds = duration_in_seconds.round()
	        seconds.push(duration_in_seconds)
	    end
	    return seconds
	end


	def number_of_subtitles(subtitles)
	    return subtitles.scan(/\d+:\d+:\d+,\d+\s-->\s\d+:\d+:\d+,\d+/).length
	end

	class SRTParser
	  	def parse_file(path_to_file)
	  		subtitles = File.read(path_to_file)
	  		lines = get_lines(subtitles)
	  		number_of_sentences = get_number_of_sentences(subtitles)
	  		symbols = get_all_symbols(lines)
	  		average_symbols_per_line = (symbols.to_f/lines.length.to_f).round(2)
	  		average_symbols_per_sentence = (symbols.to_f/number_of_sentences.length.to_f).round(2)
	  		durations = get_all_durations(subtitles)
	  		duration = durations[durations.length - 1]
	  		subtitle_counter = number_of_subtitles(subtitles)

	  		average_duration = (duration.to_f / subtitle_counter.to_f).round(2)

			stats = Hash.new

			stats["number_of_words"] = get_words(subtitles).length
			stats["number_of_symbols"] = symbols
			stats["number_of_lines"] = lines.length
			stats["average_symbols_per_line"] = average_symbols_per_line
			stats["max_symbols_per_line"] = get_max_symbols(subtitles)
			stats["number_of_sentences"] = number_of_sentences.length
			stats["average_symbols_per_sentence"] = average_symbols_per_sentence
			stats["duration"] = duration
			stats["average_duration"] = average_duration

			return stats
	  	end
	end

	path = ARGV[0]

	srt_parser = SRTParser.new

	puts srt_parser.parse_file(path)
end
