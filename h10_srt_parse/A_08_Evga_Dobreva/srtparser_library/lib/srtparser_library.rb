require "./srtparser_library/version.rb"
module SrtparserLibrary
	def self.parse_file(dir)
		number_of_words = number_of_symbols = number_of_lines = max_symbols = number_of_sentences = number_of_subtitles = 0
		duration=""
		sort=File.open(dir,"r") do |file|
		file.each_line do |row|
		if row.match(/\d\d:\d\d:\d\d,\d\d\d.+/)
			duration=row
		elsif row.match(/[1-9]?[0-9]/)
			number_of_subtitles=number_of_subtitles+1
		else
			symbols=row.scan(/([~!@#$%^&*()\-{}\[\]\|\"\:><?\/])/).length
			number_of_words=number_of_words+row.split("").count
			number_of_symbols=number_of_symbols+symbols
			number_of_sentences=number_of_sentences+row.scan(/[^\.!?]+[\.!?]/).map(&:strip).count
			if (max_symbols<symbols)
					max_symbols=symbols
			end
			if row.match(/[A-Za-z]+/)
				number_of_lines=number_of_lines+1
			end
		end
	end
end
	sort.close
	
	final=duration.scan(/\d+/).map!{|str| str.to_i}
	range=(final[4]*60+final[5])*60+final[6]+final[7].to_f/1000
	
	result={}
	result["number_of_words"]=number_of_words
	result["number_of_symbols"]=number_of_symbols
	result["number_of_lines"]=number_of_lines
	result["average_symbols_per_line"]=(number_of_symbols.to_f/number_of_lines.to_f).round(2)
	result["max_symbols_per_line"]=max_symbols
	result["number_of_sentences"]=number_of_sentences
	result["average_symbols_per_sentence"]=(number_of_symbols.to_f/number_of_sentences.to_f).round(2)
	result["duration"]=range.round(2)
	result["average_duration"]=(range/number_of_subtitles).round(2)
	result
	end		
end
