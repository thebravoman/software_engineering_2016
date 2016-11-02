class SRTParse
	# finds the avarages by taking the existing hash
	def find_avarages(results)
		results["average_symbols_per_line"] = (results["number_of_symbols"].to_f/results["number_of_lines"]).round(2)
		results["average_symbols_per_sentence"] = (results["number_of_symbols"].to_f/results["number_of_sentences"]).round(2)
		results["average_duration"] = (results["duration"]/results["number_of_subtitles"]).round(2)
		return results
	end
	
	# conver hours, minutes and seconds+miliseconds to seconds
	def to_sec(time, current_type)
		case current_type
			when "hours"
				return time.to_i*3600
			when "minutes"
				return time.to_i*60
			when "seconds"
				return time.to_f
			else
				return "ERR"
		end
	end
	
	# find the duration
	# get every duration line and convert the time_to to seconds and overwrite duration
	def duration(line)
		timestamp = line.split("-->")
		time_to = timestamp.last.gsub(/,/,".").split(":")		
		duration = to_sec(time_to[0], "hours") + to_sec(time_to[1], "minutes") + to_sec(time_to[2], "seconds")
			return duration.round(2)
	end
	
	# find the max symbols per line by 
	# getting the current line and the max_symbols amount
	def max_symbols_per_line(line, max_symbols)
		current_line_symbols = line.scan(/[~!@\#$%^&*()\-{}\[\]|”:><?\/]/).count
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
				
				# if line is blank
				# null lines_after_blank back to 0
				if line =~ /^[\s]*$\n/ then
					lines_after_blank = 0
					next
				end
				
				case lines_after_blank
				
				# when the line is the number of subtitle
				# get it and count it
				when 0 then
					results["number_of_subtitles"] = line.to_i
					
				# when the line is the duration line
				# get the time to from the line and overwrite it on the results["duration"]
				# we get the last duration
				when 1 then
					results["duration"] = duration(line)
					
				# when the line is not blank or the first two after blank it means it is text line
				# do some counting
				else
					results["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.length
					results["number_of_symbols"] += line.scan(/[~!@\#$%^&*()\-{}\[\]|”:><?\/]/).count
					results["number_of_lines"] += 1
					results["max_symbols_per_line"] = max_symbols_per_line( line, results["max_symbols_per_line"])
					results["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).count
				end
				
				# after each line bomb the line_after_blank 
				lines_after_blank += 1
				
			end
		end
		
		# return results found earlier
		# add avarage amounts
		return find_avarages(results)
	end
end
