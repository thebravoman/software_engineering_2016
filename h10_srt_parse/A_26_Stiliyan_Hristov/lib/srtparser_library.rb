require_relative "./srtparser_library/version"
require 'srt'

module SRTParser


  		def self.parse_file(file_path)
  	    arraySRT = []
  	  	hashedSRT = {}
        hashedSRT["average_symbols_per_sentences"] =
  	    hashedSRT["average_symbols_per_line"] =
  			hashedSRT["number_of_words"] =
  			hashedSRT["number_of_symbols"] =
  	    hashedSRT["number_of_lines"] =
  	    hashedSRT["number_of_sentences"] =
  	    hashedSRT["max_symbols_per_line"] =
  			max_line_time = max_line_sequence = 0



  			file = SRT::File.parse(File.new(file_path))

  			file.lines.each do |line|
  		    	arraySRT = line.text.join(" ")


  				 	hashedSRT["number_of_words"] +=  arraySRT.split(/\S+/).size
  					hashedSRT["number_of_symbols"] += arraySRT.split(/[-~!@#$%^&*()\[\]{}|”:><?\/]/).size

  	        if  arraySRT.split(/[-~!@#$%^&*()\[\]{}|”:><?\/]/).size > hashedSRT["max_symbols_per_line"]
  	            hashedSRT["max_symbols_per_line"] =  arraySRT.split(/[[:punct:]]/).size
  	        end

  	        if arraySRT =~ /[A-Za-z]+/
  	 						hashedSRT["number_of_lines"] += 1
  					end

  	        if arraySRT =~ /([A-Z][^\.!?]+)[\.!?]/
  	   			   hashedSRT["number_of_sentences"] += 1
  	        end
  					if(max_line_time < line.end_time)
  								max_line_time = line.end_time
  					end
  					if(max_line_sequence < line.sequence)
  							max_line_sequence = line.sequence
  					end

  	    end

        hashedSRT["average_symbols_per_line"] = (hashedSRT["number_of_symbols"].to_f/hashedSRT["number_of_lines"]).round(2)
  			hashedSRT["duration"] = max_line_time.round(2)
  			hashedSRT["average_duration"] = (hashedSRT["duration"]/max_line_sequence).round(2)
        hashedSRT["average_symbols_per_sentences"] = (hashedSRT["number_of_symbols"].to_f/hashedSRT["number_of_sentences"]).round(2)
        return hashedSRT

  		end

  		def second_converter(seconds,type)
  							case current_type
  						when "hours"
  							return time.to_i*3600
  						when "minutes"
  							return time.to_i*60
  						when "seconds"
  							return time.to_f
  						end
  		end

end
