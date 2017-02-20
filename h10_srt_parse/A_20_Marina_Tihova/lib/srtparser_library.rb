require "srtparser_library/version"

module SRTParser
	def self.parse_file(path_to_file)
		parsedHash = Hash.new
		content = (File.readlines path_to_file).join

		parsedHash['number_of_words'] = number_of_words(path_to_file)
		parsedHash['number_of_symbols'] = number_of_symbols(path_to_file)
		parsedHash['number_of_lines'] = number_of_lines(path_to_file)
		parsedHash['average_symbols_per_line'] = average_symbols_per_line(path_to_file)
		parsedHash['max_symbols_per_line'] = max_symbols_per_line(path_to_file)
		parsedHash['number_of_sentences'] = number_of_sentences(content)
		parsedHash['average_symbols_per_sentence'] = average_symbols_per_sentence(content, path_to_file)
		parsedHash['duration'] = duration(content)
		parsedHash['average_duration'] = average_duration(content)

		parsedHash
	end

	def self.count_specs(regex, path)
		timing = /\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/
		subtitle_number = /^\d+$/

		count = 0
		File.open(path).each do |line|
			unless timing.match(line) || subtitle_number.match(line)
			 	count += line.scan(regex).size
			end
		end

		count
	end

	def self.number_of_words(path)
		word = /[\w']+/
		count_specs(word, path)
	end

	def self.number_of_symbols(path)
		symbols = /[~!@#\$%\^&*\(\)\-\{\}\[\]|":><\?\/]/
		count_specs(symbols, path)
	end

	def self.number_of_lines(path)
		line = /(^.+\n$)/
		count_specs(/.+/, path)
	end

	def self.average_symbols_per_line(path)
		(number_of_symbols(path) / number_of_lines(path)).round(2)
	end

	def self.max_symbols_per_line(path)
		timing = /\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/
		count_line = /^\d+$/

		symbols = /[~!@#\$%\^&*\(\)\-\{\}\[\]|":><\?\/]/
		symbols_count, max = 0, 0

		File.open(path).each do |line|
			unless timing.match(line) || count_line.match(line)
			 	symbols_count = line.scan(symbols).size
			 	max = symbols_count if max < symbols_count
			end
		end

		max
	end

	def self.number_of_sentences(content)
		sentence = /([A-Z].*[\.!\?])/
		content.scan(sentence).size
	end

	def self.average_symbols_per_sentence(content, path)
		(number_of_symbols(path) / number_of_sentences(content)).round(2)
	end

	def self.duration(content)
		timing = /(\d{2}:\d{2}:\d{2},\d{3})/
		last = content.scan(timing)[content.scan(timing).size - 1].join
		(calc_seconds(last)).round(2)
	end

	def self.average_duration(content)
		count = /^\d+$/
		subs_count = content.scan(count)[content.scan(count).size - 1].to_f
		(duration(content) / subs_count).round(2)
	end

	def self.calc_seconds(time)
		(time[0] + time[1]).to_f * 3600 + (time[3] + time[4]).to_f * 60 + (time[6] + time[7]).to_f + ("0." + time[9] + time[10] + time[11]).to_f
	end
end
