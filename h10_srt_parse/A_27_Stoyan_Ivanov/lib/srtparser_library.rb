#global for max symbols command
$MAX = 1
#global for number of symbols command
$NUMBER_OF_SYMBOLS = 0

module SrtparserLibrary
	class SRTParser

		def whole_duration(file)
		    seconds = []
		    time = file.scan(/[0-9]{2}+:[0-9]{2}+:[0-9]{2}+,[0-9]{3}+/)

		    time.each do |single_duration|
		        timestamp = single_duration.split("-->")

		        timestamp.each do |duration_in_seconds|

		            duration_in_seconds = duration_in_seconds.gsub(",",".").split(":")
		              	
		            duration_in_seconds = (duration_in_seconds[0].to_f * 3600) +
		              					  (duration_in_seconds[1].to_f * 60) +
		              					  (duration_in_seconds[2].to_f)

		            seconds.push(duration_in_seconds.round(2))
		        end
		    end
		          
		    return seconds
		end

		def number_of_words(file)
			words = file.scan(/[A-Za-z']+/)
			return words.length
		end

		def get_lines(file)
			lines = file.scan(/^[~!@#$%^&*()\-{}\[\]|”:><? ,A-Za-z.']+$/)
			return lines
		end

		def symbols(file, command)
			count_for_symbols = 0
			maximal = 0
			current = 0

			lines = get_lines(file)

			lines.each do |line|

				current = line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).length
				count_for_symbols += current

				if current > maximal
					maximal = current
				end
			end

			if command == $MAX
				return maximal 
			else
				return count_for_symbols
			end

		end

		def number_of_sentences(file)
			sentences = file.scan(/[A-Z][^.?!]+[.?!]/)
			return sentences.length
		end



			def parse_file(filename)
				output = Hash.new

				file = File.read(filename)

				num_of_subs = file.scan(/^[0-9]+$/).length
				puts num_of_subs
				duration = whole_duration(file)

				output["number_of_words"] = number_of_words(file)

				output["number_of_symbols"] = symbols(file, $NUMBER_OF_SYMBOLS)

				output["number_of_lines"] = get_lines(file).length

				output["average_symbols_per_line"] = (output["number_of_symbols"].to_f /
												   	output["number_of_lines"]).round(2)

				output["max_symbols_per_line"] = symbols(file, $MAX)

				output["number_of_sentences"] = number_of_sentences(file)

				output["average_sybols_per_sentence"] = (output["number_of_symbols"].to_f / 
													   	output["number_of_sentences"]).round(2)

				output["duration"] = duration.last
				 
				output["average_duration"] = (output["duration"].to_f /
											 num_of_subs).round(2)
			end
	end
end


	