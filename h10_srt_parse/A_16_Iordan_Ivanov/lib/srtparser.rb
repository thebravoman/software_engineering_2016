module SrtparseLibrary
	def self.parse_file(path_to_file)
		file = File.open(path_to_file)
		srt_file = File.read(file)
		counter = 0
		temp = 0

		srt_word_counter = 0
		srt_sentence_counter = 0
		srt_symbol_counter = 0
		srt_max_symbols = 0
		srt_line_counter = 0
		srt_avsymbol_perline = 0
		srt_avsymbol_persent = 0
		srt_duration = 0
		srt_avduration = 0

		srt_output = Hash.new

		srt_parsed = srt_file.scan(/(\d+)\n(\d\d:\d\d:\d\d,\d\d\d) --> (\d\d:\d\d:\d\d,\d\d\d)\n((?:.+\n?)+)/)


		while(srt_parsed[counter][3] != srt_parsed[-1][3])
			temp = (srt_parsed[counter][3].scan(/([a-zA-Z])\w+/)).size
			srt_word_counter = srt_word_counter + temp
			temp = (srt_parsed[counter][3].scan(/[~!@#\$%\^&\*\(\)\-{}\[\]\|”:><\?\/]/)).size
			srt_symbol_counter = srt_symbol_counter + temp
			if(temp > srt_max_symbols)
				srt_max_symbols = temp
			end
			srt_line_counter = srt_line_counter + (srt_parsed[counter][3].split("\n")).size
			srt_sentence_counter = srt_sentence_counter + srt_parsed[counter][3].scan(/[^\.!?]+[\.!?]/).map(&:strip).count
			counter = counter + 1
		end
			temp = (srt_parsed[counter][3].scan(/([a-zA-Z])\w+/)).size
			srt_word_counter = srt_word_counter + temp
			temp = (srt_parsed[counter][3].scan(/[~!@#\$%\^&\*\(\)\-{}\[\]\|”:><\?\/]/)).size
			srt_symbol_counter = srt_symbol_counter + temp
			if(temp > srt_max_symbols)
				srt_max_symbols = temp
			end
			srt_line_counter = srt_line_counter + (srt_parsed[counter][3].split("\n")).size
			srt_sentence_counter = srt_sentence_counter + srt_parsed[counter][3].scan(/[^\.!?]+[\.!?]/).map(&:strip).count
			srt_duration_str = srt_parsed[counter][2].split(":")
			tempstr = srt_duration_str[2]
			tempstr[2] = '.'
			srt_duration = (((srt_duration_str[0].to_i) * 3600).to_f + ((srt_duration_str[1].to_i) * 60).to_f + tempstr.to_f)
			counter = counter + 1
			
		srt_duration = srt_duration.round(2)
		srt_avsymbol_perline = srt_symbol_counter.to_f / srt_line_counter.to_f
		srt_avsymbol_perline = srt_avsymbol_perline.round(2)
		srt_avsymbol_persent = srt_symbol_counter.to_f / srt_sentence_counter.to_f
		srt_avsymbol_persent = srt_avsymbol_persent.round(2)
		srt_avduration = srt_duration.to_f / counter.to_f
		srt_avduration = srt_avduration.round(2)

		srt_output["number_of_words"] = srt_word_counter
		srt_output["number_of_symbols"] = srt_symbol_counter
		srt_output["number_of_lines"] = srt_line_counter
		srt_output["number_of_sentences"] = srt_sentence_counter
		srt_output["max_symbols_per_line"] = srt_max_symbols
		srt_output["average_symbols_per_line"] = srt_avsymbol_perline
		srt_output["average_symbols_per_sentence"] = srt_avsymbol_persent
		srt_output["duration"] = srt_duration
		srt_output["average_duration"] = srt_avduration
	end
end