require "srt_parsing/version"

	class SRTParser	
  		def parse_file(path_to_file)

				data = File.read(path_to_file)
				srt = Hash.new
				lines = data.readlines.size

				srt["number_of_words"] = number_words(data,lines).to_i
				srt["number_of_symbols"] = number_symbols(data,lines).to_i
				srt["number_of_lines"] = lines.to_i
				srt["average_symbols_per_line"] = avr_symbols(data).round(2)
				srt["max_symbols_per_line"] = max_symbols(data)
				srt["number_of_sentences"] = number_sent(data)
				srt["average_symbols_per_sentence"] = avr_symbols_sent(data).round(2) 
				srt["duration"] = duration(data).round(2)
				srt["average_duration"] = (srt["duration"] / number_of_subtitles(data).to_f).round(2)
end

		def number_words(data, lines)
			amount = 0
			lines.each do |line|
				amount += data.scan(/[a-z'A-Z]+/).count
			end
				return amount
		end
  		
		def number_symbols(data, lines)
			amount = 0
			lines.each do |line|
				amount += data.scan(/#{"[~!@#$%^&*(){}\\[\\]|:><?\"\\\/-]"}/).count
			end
				return amount
		end

  		def avr_symbols(data, lines)
  				amount_symbols = number_symbols(data) 
  				amount_lines = lines
  				avr_symbols = amount_symbols.to_f / amount_lines.to_f

  				return avr_symbols.to_f 
  		end

  		def max_symbols(data,lines)
  			amount = 0
  			max_amount = 0
  			lines.each do |line|
  					amount = number_symbols(data)
  					if(amount > max_amount)
  						max_amount = amount
  					end
  				return max_amount
	 		end
		end

		def number_sent(data)
				amount = 0
				amount = data.scan(/[A-Z].*[\.!\?]/).count
				return amount
		end	

		def avr_symbols_sent(data)
				amount = 0
				amount = number_symbols(data).to_f / number_sent(data).to_f
				return amount
		end

		def duration(data)
				amount = 0
				last_line = data.lines.last
				at_end = last_line.gsub!(/\D/,"")
				seconds = at_end.reverse[0..1].to_f
				minutes = at_end.reverse[2..3].to_i * 60
				hours = at_end.reverse[4..5].to_i * 3600
				amount = hours + minutes + seconds
				return amount
		end

		def number_of_subtitles(data)
			return data.scan(/\d+:\d+:\d+,\d+\s-->\s\d+:\d+:\d+,\d+/).length
		end
end
