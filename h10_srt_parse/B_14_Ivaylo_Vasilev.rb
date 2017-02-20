class SRTParse

def duration(line)
	subtitle = line.split("-->")
	duration = subtitle.last.gsub(/,/,".").split(":")
	duration = (duration[0].to_i * 3600) + (duration[1].to_i * 60) + (duration[2].to_f)
				
return duration.round(2)
end


 def parse_file(subtitles_file)
	hash = Hash.new(0)
	empty = -1

 	File.open(subtitles_file,"r") do |file|
	    file.each_line do |line|

		empty += 1

	    if line =~ /^[\s]*$\n/ then
		empty = 0
	       
	    else 
		case empty
		     when 0 then
			hash["number_of_subtitles"] += 1
			empty += 1

 		     when 1 then
			hash["number_of_subtitles"] += 1

		     when 2 then
			
				hash["duration"] = duration(line)
		     else

			hash["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.length
			hash["number_of_symbols"] += line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
			hash["number_of_lines"] += 1
			hash["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).count
			
			if  line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count > hash["max_symbols_per_line"] then
				hash["max_symbols_per_line"] = line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
			end

		     end #case
	    end #if	
	    end #do
	end #do

		hash["average_symbols_per_line"] = hash["number_of_symbols"].to_f / hash["number_of_lines"].to_f
		hash["average_symbols_per_line"] = hash["average_symbols_per_line"].round(2)
		hash["average_symbols_per_sentence"] = hash["number_of_symbols"].to_f / hash["number_of_sentences"].to_f
		hash["average_symbols_per_sentence"] = hash["average_symbols_per_sentence"].round(2)
		hash["average_duration"] = (hash["duration"].to_f/hash["number_of_subtitles"].to_f).round(2)

		puts hash["number_of_lines"]
 end #def
	
end #class
SRTParse.new.parse_file("sb.srt")
