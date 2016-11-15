require "srtparser_library/version"

module SrtparserLibrary
 	class SRTParser
	$result = Hash.new(0)

	     def parse_file (path_to_file)
	     	counter = 0
   			File.readlines(path_to_file).each do |line|
				
				if line.match(/\d\d:\d\d:\d\d,\d\d\d.+/)
					time = line
				elsif line.match(/[1-9]?[0-9]+/)
					counter += 1
				else
					find_number_of_words(line)
					find_number_of_symbols(line)
					find_number_of_lines(line)
					find_max_symbols_per_line(line)
					find_number_of_sentences(line)
				end

			end
			
			find_average_symbols_per_line()
			find_average_symbols_per_sentence()
			find_average_duration(counter)

	     end

	     def find_number_of_words (line)
	     	$result["number_of_words"] += line.scan(/([A-Za-z]['A-Za-z]+)/).size 

	     end

	     def find_number_of_symbols (line)
	     	$result["number_of_symbols"] += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size

		 end

		 def find_number_of_lines (line)
		 	$result["number_of_lines"] += 1

		 end

		 def find_average_symbols_per_line ()
		 	average_symbols_per_line = $result["number_of_symbols"]/$result["number_of_lines"]
		 	$result["average_symbols_per_line"] = average_symbols_per_line.round(2)

		 end

		 def find_max_symbols_per_line (line)
		 	 if $result["max_symbols_per_line"] < line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size 
					$result["max_symbols_per_line"] = line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size	
			 end

		 end

		 def find_number_of_sentences (line)
		 	$result["number_of_sentences"] += line.split(/[^\.!?]+[\.!?]/).size

		 end

		 def find_average_symbols_per_sentence ()
		 	average_symbols_per_sentence = $result["number_of_symbols"]/$result["number_of_sentences"]
		 	$result["average_symbols_per_sentence"] = average_symbols_per_sentence.round(2)

		 end

		 def find_duration (line)
		 	$result["duration"] = hash_d[:to]
		 end

		 def find_average_duration (counter)
		 	average_duration = $result["duration"].to_f/counter.to_i
		 	$result["average_duration"] = average_duration.round(2)
		 end   

end
end
