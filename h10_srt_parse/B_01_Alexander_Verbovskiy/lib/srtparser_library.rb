class SRTParse
 
 def parse_file(path_to_file)
    output = Hash.new(0)
    empty = -1
 
    file=File.open(path_to_file).read
        file.each_line do |line|
 
        empty += 1
 
        if line =~ /^\s*$/ then
        empty = 0
           
        else
        case empty
             when 0 then
            output["number_of_subtitles"] += 1
            empty += 1
 
             when 1 then
            output["number_of_subtitles"] += 1
 
             when 2 then
                subtitle = line.split("-->")
                sub_end = subtitle.last.gsub(/,/,".").split(":")
                sub_end = (sub_end[0].to_i * 3600) + (sub_end[1].to_i * 60) + (sub_end[2].to_f)
                output["duration"] = sub_end.round(2)
             else
 
            output["number_of_words"] += line.gsub(/[[:punct:]]/, '').split.length
            output["number_of_symbols"] += line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
            output["number_of_lines"] += 1
            output["number_of_sentences"] += line.scan(/[^\.!?]+[\.!?]/).count
           
            if  line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count > output["max_symbols_per_line"] then
                output["max_symbols_per_line"] = line.scan(/[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\"\:\>\<\?\/]/).count
            end
 
             end #case
        end #if
        end #do
 
        output["average_symbols_per_line"] = output["number_of_symbols"].to_f / output["number_of_lines"].to_f
        output["average_symbols_per_line"] = output["average_symbols_per_line"].round(2)
 
        output["average_symbols_per_sentence"] = output["number_of_symbols"].to_f / output["number_of_sentences"].to_f
        output["average_symbols_per_sentence"] = output["average_symbols_per_sentence"].round(2)
 
        output["average_duration"] = (output["duration"].to_f/output["number_of_subtitles"].to_f).round(2)
 
        return output
 end #def
   
end #class
