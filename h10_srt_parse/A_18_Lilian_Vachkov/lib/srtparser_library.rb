require "srtparser_library/version"

module SrtparserLibrary
	def number_of_words(text)
		return text.scan(/['()\[\]a-zA-Z]+/).size
	end

	def number_of_symbols(text)
		return text.scan(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/).count
	end
		
	def number_of_lines(text)
		return text.scan(/^[a-zA-Z](...)+/)
	end

	def average_symbols_per_line(text)
		return number_of_symbols(text)/number_of_lines(text)
	end

	def max_symbols_per_line(text)
		symbols = 0
		max_symbols = 0 
		lines = number_of_lines(text)
		lines.each do |line|
			symbols = number_of_symbols(text)
			if(max_symbols < symbols)
				max_symbols = symbols
			end
		end
		return max_symbols
	end
	
	def number_of_sentences(text)
		return text.scan(/^[A-Z].+[\.!?]/)
	end	

	def average_symbols_per_sentence(text)
		symbols = 0
		sentences = number_of_sentences(text)
		sentences.each do |s|
			symbols += max_symbols_per_line(s)
		end
		return symbols/number_of_sentences().count
	end

	def duration_count(text)
		dur = text.scan(/^(\d+):[0-9]+:[0-9]+,[0-9]+ --> [0-9]+:[0-9]+:[0-9]+,[0-9]+/).count
	end

	def duration(text)
		hash = {}
		dur = text.scan(/^(\d+):[0-9]+:[0-9]+,[0-9]+ --> [0-9]+:[0-9]+:[0-9]+,[0-9]+/)
		dur.each do |d|
			time = d.scan(/[^:.,-->]+/)
			hash["duration"] += ((time[4].to_i*3600 + time[5].to_i*60+time[6].to_i + (time[7].to_i/1000).round(2)) - time[0].to_i*3600+time[1].to_i*60+time[2].to_i+(time[3].to_i/1000).round(2)).round(2)
		end
		return hash
	end

	def average_duration(text)
		return (duration(text)["duration"]/duration_count(text)).round(2)
	end

	def parse_file(file)
		hash = {}
		file = File.open(file, 'r')
		text = file.read
		hash["number_of_words"] = number_of_words(text)
		hash["number_of_symbols"] = number_of_symbols(text)
		hash["number_of_lines"] = number_of_lines(text).count 
		hash["average_symbols_per_line"] = average_symbols_per_line(text)
		hash["max_symbols_per_line"] = max_symbols_per_line(text)
		hash["number_of_sentences"] = number_of_sentences(text).count
		hash["average_symbols_per_sentence"] = average_symbols_per_sentence(text)
		hash["duration"] = duration(text)
		hash = hash.merge(average_duration(text))
		hash["average_duration"] = average_duration(text)
		file.close
	end
end

