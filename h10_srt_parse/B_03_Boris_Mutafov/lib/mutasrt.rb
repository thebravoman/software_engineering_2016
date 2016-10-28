class SRTParse
	def find_avarages(results)
		#find avarage symbols per line
		results["average_symbols_per_line"] = (results["number_of_symbols"].to_f/results["number_of_lines"]).round(2)
		#find avarage symbols per sentence
		results["average_symbols_per_sentence"] = (results["number_of_symbols"].to_f/results["number_of_sentences"]).round(2)
		#find avarage duration
		results["average_duration"] = (results["duration"]/results["number_of_subtitles"]).round(2)
		return results
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
		#define Hash and vars
		results = Hash.new(0)
		lines_after_blank = 0
		
		#reading file line by line
		File.open(path_to_file, "r") do |infile|
			infile.each_line do |line|
				#if line is blank null the num after blank
				if line =~ /^[\s]*$\n/ then
					lines_after_blank = 0
					next
				end #if
				
				case lines_after_blank
				when 0 then #when line is the number of subtitle
					results["number_of_subtitles"] = line.to_i
				when 1 then #when line is the time from-to	
					results["duration"] += duration(line)
				else #when line is text
					results["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.length
					results["number_of_symbols"] += line.scan(/[[:punct:]]/).count
					results["number_of_lines"] += 1
					results["max_symbols_per_line"] = max_symbols_per_line( line, results["max_symbols_per_line"])
					results["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).count
				end	#end of case
				lines_after_blank += 1
			end #infile
		end #fopen
		#finished reading file line by line
		return find_avarages(results)
	end #def
end #class
