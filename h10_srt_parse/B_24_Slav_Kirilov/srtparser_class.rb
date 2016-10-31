class SRTParser
	def SRTParser.parse_file path_to_file
		file_path = path_to_file
		final = Hash.new(0)
		def self.number_of_lines file_path
			file = File.open(file_path)
			number_of_lines = 0
			file.each_line do |line|
				line = line.gsub /[-0-9:,>\n]/,''
				if line != ""
					number_of_lines += 1
				end
			end
			return number_of_lines
		end
		def self.number_of_words file_path
			file = File.open(file_path)
			number_of_words = 0
			file.each_line do |line|
				words = line.split
				words.each do |word|
					word = word.gsub /[-0-9:,>]/,''
					if word != ""
						number_of_words += 1
					end
				end
			end
			return number_of_words
		end
		def self.number_of_symbols file_path
			file = File.open(file_path)
			number_of_symbols = 0
			file.each_line do |line|
				words = line.split
				words.each do |word|
					word = word.gsub /[-0-9:,>]/,''
					if count = word.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
						number_of_symbols += count
					end
				end
			end
			return number_of_symbols
		end
		def	self.max_symbols_per_line file_path
			max_symbols_per_line = 0
			count = 0
			file = File.open(file_path)
			file.each_line do |line|
				line = line.gsub(/[-0-9:,>]/,'')
				if line != ''
					count = line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
					if 	max_symbols_per_line < count
						max_symbols_per_line = count
					end	
				end
			end
			return max_symbols_per_line
		end
		def self.number_of_sentences file_path
			number_of_sentences = 0
			file = File.open(file_path)
			file.each_line do |line|
				line = line.gsub(/[-0-9:,>]/,'')
				if line != ''
					line = line.split
					line.each do |word|
						if word =~ /[^A-Z]*/
							state = 1
						end
						if state == 1
							if word =~ (/[. ? !]/)
								state = 0
								number_of_sentences += 1
							end
						end
					end
				end
			end
			return number_of_sentences
		end
		def self.duration file_path
			duration = 0.0
			first_line_state = 0
			last_line = 0
			first_line = 0
			file = File.open(file_path)
			file.each_line do |line|
				if line =~ /[>]/ && first_line_state == 0
					time = line.byteslice(0,12)
					hours = time.byteslice(0,2).to_i
					minutes = time.byteslice(3,2).to_i
					seconds = time.byteslice(6,2).to_i
					miliseconds = time.byteslice(9,3).to_i
					first_line_state = 1
					minutes += hours*60
					seconds += minutes*60
					first_line = seconds.to_f + (miliseconds.to_f/1000)
				end
				if line =~ /[>]/
					time = line.byteslice(15,12)
					hours = time.byteslice(0,2).to_i
					minutes = time.byteslice(3,2).to_i
					seconds = time.byteslice(6,2).to_i
					miliseconds = time.byteslice(9,2).to_i
					minutes += hours*60
					seconds += minutes*60
					last_line = seconds.to_f + (miliseconds.to_f/1000)
				end
			end
			duration += last_line - first_line
			return duration.round(2)
		end	
		def self.number_of_subtitles file_path
			number_of_subtitles = 0
			file = File.open(file_path)
			file.each_line do |line|
				if line.scan(/[0-9]/).count > 17
					number_of_subtitles += 1
				end
			end
			return number_of_subtitles
		end
		final["number_of_words"] = number_of_words file_path
		final["number_of_symbols"] = number_of_symbols file_path
		final["number_of_lines"] = number_of_lines file_path
		final["average_symbols_per_line"] = ((number_of_symbols file_path ).to_f/(number_of_lines file_path).to_f).round(2)
		final["max_symbols_per_line"] = max_symbols_per_line file_path
		final["number_of_sentences"] = number_of_sentences file_path
		final["average_symbols_per_sentence"] = ((number_of_symbols file_path).to_f / (number_of_sentences file_path).to_f).round(2)
		final["duration"] = (duration file_path).round()
		final["average_duration"] = ((duration file_path).to_f / (number_of_subtitles file_path).to_f).round(2)
		return final
	end
end	
