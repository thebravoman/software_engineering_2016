class SRTParse
 		$only_number = /^(\d+)$/

	
 	def parse_file(path_to_file)

 		result  = Hash.new(0)
		
		result["number_of_words"] = 0 
		result["number_of_symbols"] = 0 
		result["number_of_lines"] = 0 
		result["average_symbols_per_line"] = 0.00 
		result["max_symbols_per_line"] = 0 
		result["number_of_sentences"] = 0
		result["average_symbols_per_sentence"] = 0.00 
		result["duration"] = 0 
		result["average_duration"] = 0.00

  		row_number = 0;
 
  		file=File.open(path_to_file).read

			file.each_line do |line|

		 		if $only_number.match(line) then
      				row_number = 1
					result["number_of_subtitles"] = line.to_i
				end
				if(row_number == 2) then
					subtitle = line.split("-->")
					sub_end = subtitle.last.gsub(/,/,".").split(":")
					hours = sub_end[0].to_i * 3600
					minutes = sub_end[1].to_i * 60
					seconds = sub_end[2].to_f
					result["duration"] = (hours+minutes+seconds).round(2)		
				end
				if(row_number > 2) then
					result["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.size
					result["number_of_symbols"] += line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
				if(!(line =~ /^\s*$/)) then
					result["number_of_lines"] += 1
				end
					result["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).count
				end
				if(result["number_of_symbols"] > result["max_symbols_per_line"]) then
							result["max_symbols_per_line"] = result["number_of_symbols"]
				end
				row_number+=1	
			end	
		result["average_symbols_per_line"] = (result["number_of_symbols"].to_f / result["number_of_lines"].to_f).round(2)
		result["average_symbols_per_sentence"] = (result["number_of_symbols"].to_f / result["number_of_sentences"].to_f).round(2)
		result["average_duration"] = (result["duration"].to_f/result["number_of_subtitles"].to_f).round(2)

		return result
	end
end 

