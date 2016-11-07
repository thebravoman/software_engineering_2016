class SRTParser
   def number_of_words (line)
   		return line.scan(/([A-Za-z]['A-Za-z]+)/).size
   end

   def number_of_symbols (line)
   		return line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size
   end

   def number_of_lines (parsed_hash,line)
   		if line =~ /[A-Za-z]+/
   			parsed_hash["number_of_lines"] += 1	
   		end
   		return parsed_hash
   end

   def average_symbols_per_line (parsed_hash)
   		parsed_hash["average_symbols_per_line"] = (parsed_hash["number_of_symbols"].to_i/parsed_hash["number_of_lines"].to_f).round(2)
   		return parsed_hash
   end

   def max_symbols_per_line (parsed_hash, line)
   		if  number_of_symbols(line) > parsed_hash["max_symbols_per_line"]
   			parsed_hash["max_symbols_per_line"] = number_of_symbols(line)
   		end
   		return parsed_hash
   end
   
   def number_of_sentences (parsed_hash, line)
   		if line =~ /([A-Z][^\.!?]+)[\.!?]/
   			parsed_hash["number_of_sentences"] += 1
   		end
   		return parsed_hash
   end

   def duration(parsed_hash, hash_d)
   		parsed_hash["duration"] = hash_d[:to]
   		return parsed_hash
   end

   def average_symbols_per_sentence (parsed_hash)
   		average = parsed_hash["number_of_symbols"].to_i/parsed_hash["number_of_sentences"].to_f
         parsed_hash["average_symbols_per_sentence"] = average.round(2)
         return parsed_hash
   end

   def average_duration (parsed_hash, count)
   		parsed_hash["average_duration"] = (parsed_hash["duration"].to_f/count.to_f).round(2)
   		return parsed_hash
   end

   public def parse_file(path_to_file)
   		parsed_hash = Hash.new(0)
   		hash_d = {}
   		count_subs = 0

   		File.open(path_to_file, "r") do |file_line|
   			
   			file_line.each_line() do |str_line|
   				
   				parsed_hash["number_of_words"] += number_of_words(str_line)
   				parsed_hash["number_of_symbols"] += number_of_symbols(str_line)

   				number_of_lines(parsed_hash, str_line)

   				max_symbols_per_line(parsed_hash, str_line)

   				number_of_sentences(parsed_hash, str_line)

   				#Get duration
   				if (/-->/).match(str_line) then hash_d = Hash[ [:from, :to].zip(str_line.gsub!(" ","").chop.split(/-->/)) ] end

   				#Count subtitles
   				if /\b\d\b/.match(str_line) then count_subs += 1 
   				end
   				
   			end
   		end	
   		average_symbols_per_line(parsed_hash)
   		average_symbols_per_sentence(parsed_hash)
   		average_duration(parsed_hash, count_subs)
   		
   		#Duration
   		duration(parsed_hash, hash_d)
   		
   		return parsed_hash
   end

   private :number_of_words,
   		   :number_of_symbols,
   		   :number_of_lines,
   		   :average_symbols_per_line,
   		   :max_symbols_per_line,
   		   :number_of_sentences,
   		   :average_symbols_per_sentence,
   		   :duration,
   		   :average_duration
end
