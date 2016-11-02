require "srtparse_library/version"

module SRTParser
	def parse_file(path_to_file)
		#result returning
		result = Hash.new(0)
		result["number_of_words"] = number_of_words(path_to_file)
		result["number_of_symbols"] = number_of_symbols(path_to_file)
		result["number_of_lines"] = number_of_lines(path_to_file)
		result["average_symbols_per_line"] = average_sumbols_per_line(path_to_file)
		result["max_symbols_per_line"] = max_symbols_per_line(path_to_file)
		result["number_of_sentences"] = number_of_sentences(path_to_file)
		result["average_symbols_per_sentence"] = average_symbols_per_sentence(path_to_file)#average_duration
		result["duration"] = duration(path_to_file)
		result["average_duration"] = average_duration(path_to_file)
		
		return result
	end
		
	def number_of_words(path) #done
		words_counter = 0
		File.open(path).each do |line|
			if /([A-Z][\w,\d+\s+,~@#$%^&*()\-{}\[\]|”:><\/]+[.?!])/.match(line)
				online_words_count = line.split(' ')
				for word in online_words_count
					words_counter+=1
				end
			end
	
	
		end
		return words_counter
	end
	
	def number_of_symbols(path) #done
		symbols = 0
		File.open(path).each do |line|
			if /([A-Z][\w,\d+\s+,~@#$%^&*()\-{}\[\]|”:><\/]+[.?!])/.match(line)
				online_words_count = line.split(' ')
				for word in online_words_count
					symbols += (word.scan(/([~!@#$%^&*(){}\[\]|”:><?\/-])/)).size
				end
			end
	
	
		end
		return symbols
	end

	
	def number_of_lines(path) #done
		number_lines = 0
		File.open(path).each do |line|
			number_lines += 1
		end
		return number_lines
	end
	
	def average_symbols_per_line(path)
		return (number_of_symbols(path).to_f / number_of_lines(path)).round(2)
	end
	
	def max_symbols_per_line(path) #done
		max_symbols = 0
		File.open(path).each do |line|
			if /([A-Z][\w,\d+\s+,~@#$%^&*()\-{}\[\]|”:><\/]+[.?!])/.match(line)
				online_words_count = line.split(' ')
				for word in online_words_count
					if max_symbols < (word.scan(/([~!@#$%^&*(){}\[\]|”:><?\/-])/)).size
					max_symbols = (word.scan(/([~!@#$%^&*(){}\[\]|”:><?\/-])/)).size
					end
				end
			end
		end
		return max_symbols
	end

	
	def number_of_sentences(path) #done
		sentences_counter = 0
		File.open(path).each do |line|
			current_line_sentences = line.scan(/([A-Z][\w,\d+\s+,~@#$%^&*()\-{}\[\]|”:><\/]+[.?!])/)
			for sentence in current_line_sentences
				sentences_counter += 1
			end
		end
		return sentences_counter
	end
	
	def average_symbols_per_sentence(path)
		return (average = number_of_symbols(path) / number_of_sentences(path).to_f).round(2)
	end
	
	def duration(path) #done
	secs = 0
		File.open(path).each do |line|
			if /^(\d+):(\d+):(\d+),(\d+).*?(\d+):(\d+):(\d+),(\d+)$/.match(line)
				
				time_array = line.split(/[: \- >]/).reject { |c| c.empty? }
				
				time_array[2] = time_array[2].gsub(',', '.')
				time_array[5] = time_array[5].gsub(',', '.')

				average_secs += ((time_array[3].to_f * 3600 - (time_array[0].to_f * 3600)) + (time_array[4].to_f * 60 - (time_array[1].to_f * 60)) + (time_array[5].to_f - time_array[2].to_f)).round(2)
			end
	
	
		end
		return secs.round(2)
	end
	
	def average_duration(path) #done
	sub_number = 0
		File.open(path).each do |line|
			if /^(\d+)$/.match(line)
				sub_number += 1
			end
		end
		
		return (duration(path).to_f / sub_number).round(2)
	end



end
