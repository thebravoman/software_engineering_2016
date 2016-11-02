require "srtparser_library/version"

module SRTParser
	def self.parse_file(dir)
		countwords=0
		countlines=0
		countsymbols=0
		maxsymbols=0
		countsentences=0
		countsubtitles=0
		time=""

		srt=File.open(dir, "r") do |file|
			file.each_line do |line|

				if line.match(/\d\d:\d\d:\d\d,\d\d\d.+/)
					time = line
				elsif line.match(/[1-9]?[0-9]+/)
					countsubtitles+=1
				else
					countwords = countwords + line.split(" ").count
					symbols = line.scan(/([~!@#$%^&*()\-{}\[\]\|\"\:><?\/])/).length
					countsymbols += symbols
					countsentences = countsentences + line.scan(/[^\.!?]+[\.!?]/).map(&:strip).count
					if maxsymbols < symbols
						maxsymbols = symbols
					end
					if line.match(/([A-Za-z]+)/)
						countlines+=1
					end
				end
			end
		end
		srt.close

		ending = time.scan(/\d+/).map! { |str| str.to_i}
		duration = (ending[4]*60+ending[5])*60+ending[6]+ending[7].to_f/1000
	
		output = {}
		output["number_of_words"] = countwords
		output["number_of_symbols"] = countsymbols
		output["number_of_lines"] = countlines
		output["average_symbols_per_line"] = (countsymbols.to_f / countlines.to_f).round(2)
		output["max_symbols_per_line"] = maxsymbols
		output["number_of_sentences"] = countsentences
		output["average_symbols_per_sentence"] = (countsymbols.to_f / countsentences.to_f).round(2)
		output["duration"] = duration.round(2)
		output["average_duration"] = (duration / countsubtitles).round(2)
		output
	end
end
