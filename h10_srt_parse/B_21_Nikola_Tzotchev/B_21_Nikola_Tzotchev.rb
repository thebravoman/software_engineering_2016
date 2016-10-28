require 'json'
class SRTParse 
	
	def seconds_time(line)
		time = 0
		sek_time = 0.00
		line = line.gsub(/,/, ".")
		line = line.gsub(/--> /, ':')
		time = line.split(/:/)
		sek_time += (time[4] > time[1] || time[3] > time[0]) ? 60 + (time[5].to_f.round() - time[2].to_f.round()) : time[5].to_f.round() - time[2].to_f.round()
		return sek_time
	end 
	
	def parse_file(sub_file)
		hash_with_sol = Hash.new(0)
		max_sym_line = 0 
		avr_sym = 0.00
		avr_sym_sentence = 0.00
		sek_time = 0.00
		sub_count = 0
			File.open(sub_file, "r") do |file|
			file.each_line do |line|	
				if line.match(/--> /) 
				sek_time += seconds_time(line)
				sub_count += 1
				end	

				if  line.match( /[[[:upper:]][[:lower:]]]/)
				hash_with_sol["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.size
				hash_with_sol["number_of_symbols"] += line.split(/[[:punct:]]/).size - 1 # -1, because when they`re 4 symbols the size is 5
				hash_with_sol["number_of_lines"] += 1
					if 	hash_with_sol["max_symbols_per_line"] < line.split(/[[:punct:]]/).size - 1 
						hash_with_sol["max_symbols_per_line"] = line.split(/[[:punct:]]/).size - 1
					end  
				hash_with_sol["number_of_sentences"] += line.split(/[^\.?!][\.?!]/).size - 1
				end	
			end		
			end
		avr_sym = hash_with_sol["number_of_symbols"].to_f/ hash_with_sol["number_of_lines"].to_f 
		hash_with_sol["average_symbols_per_line"] = avr_sym.round(2)
		avr_sym_sentence = hash_with_sol["number_of_symbols"].to_f / hash_with_sol["number_of_sentences"].to_f
		hash_with_sol["average_symbols_per_sentence"] = avr_sym_sentence.round(2)	
		
		hash_with_sol["duration"] = sek_time.round() 
		hash_with_sol["average_duration"] = (sek_time.round / sub_count).round(2)
	return hash_with_sol	
	end
end  
