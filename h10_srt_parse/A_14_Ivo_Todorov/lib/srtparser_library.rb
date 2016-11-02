require "./srtparser_library/version.rb"

module SRTParser
	def self.parse_file(path_to_file)
		file = File.open(path_to_file)
		data = File.read(file).scan(/(\d+)\n(\d\d:\d\d:\d\d,\d\d\d) --> (\d\d:\d\d:\d\d,\d\d\d)\n((?:.+\n?)+)/) 
		file.close
		number_of_words = number_of_symbols = number_of_lines = max_symbols_in_line = number_of_sentences = 0
		current_sentence = ""
		# 0 - Subtitle number, 1 - Start time 2 - End time 3 - Array of lines
		data.each do |subtitle|
			current_lines = subtitle[3].split("\n")
			number_of_lines += current_lines.size
			current_lines.each do |line|
				
				symbol_count = line.scan(/([~!@#$%^&*()\-{}\[\]\|\"\:><?\/])/).size
				word_count = line.split(" ").size
				
				number_of_symbols += symbol_count
				number_of_words += word_count
				if max_symbols_in_line < symbol_count
					max_symbols_in_line = symbol_count
				end
				
				current_sentence += " " + line.strip
				current_sentence = current_sentence.strip
				while sentence = current_sentence.match(/([A-Z][^\.!?]*[\.!?])/)
					number_of_sentences += sentence.captures.size
					current_sentence = current_sentence.sub(/[A-Z][^\.!?]*[\.!?]/, "")
				end
			end
		end
		
		output = {}
		output["number_of_words"] = number_of_words
		output["number_of_symbols"] = number_of_symbols
		output["number_of_lines"] = number_of_lines
		output["average_symbols_per_line"] = (number_of_symbols.to_f / number_of_lines.to_f).round(2)
		output["max_symbols_per_line"] = max_symbols_in_line
		output["number_of_sentences"] = number_of_sentences
		output["average_symbols_per_sentence"] = (number_of_symbols.to_f / number_of_sentences.to_f).round(2)
		output["duration"] = parse_time(data.last[2])
		output["average_duration"] = (output["duration"] / data.size).round(2)
		output
		
	end
	private_class_method
	def self.parse_time(time)
		times = time.scan(/(?:[1-9]+[0-9]*,[0-9]+)|(?:[1-9]+[0-9]*)/)
		modifier = times.size
		out = 0
		times.each do |time|
			current_time = time.sub(",", ".").to_f
			out += current_time * (60 ** (modifier-1))
			modifier -= 1
		end
		out.round(2)
	end
end
