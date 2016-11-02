# require 'srt_parser/version'

module SrtParser
 	class SRTParse

			file_hash = Hash.new(0)
		File.open("sample.srt", "r") do |f|
		  f.each_line do |line|
		  	file_hash["number_of_words"] += line.scan(/[A-Za-z]+/).size 
		  	file_hash["number_of_symbols"] += line.scan(/[~!@#$%^&*()\-\[\]{}:"<>?\/]/).size
		  	file_hash["number_of_line"] += 1
		  	size = line.scan(/[~!@#$%^&*()\-\[\]{}:"<>?\/]/).size

		 	if size > file_hash["max_symbols_per_line"]
		      file_hash["max_symbols_per_line"] = size
		    end

		    file_hash["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).map(&:strip).count
		    file_hash["average_symbols_per_line"] = file_hash["number_of_symbols"] / file_hash["number_of_line"].round(2)
		    file_hash["average_symbols_per_sentence"] = file_hash["number_of_symbols"] / file_hash["number_of_sentences"].round(2) 
		 
		  end
			puts file_hash
		end
 	end
end
