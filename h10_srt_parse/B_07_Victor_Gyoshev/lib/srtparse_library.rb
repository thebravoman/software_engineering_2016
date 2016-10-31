module SRTParser
    def self.parse_file(dir)
        if !File.exist?(dir) || File.extname(dir) != (".srt") then return -1 end
        hash = Hash.new
        line_count = 0
        word_count = 0
        symbol_count = 0
        max_line_symbol = 0
        current_line_sym = 0
        sentence_count = 0
        sub_ID = 0
        sentence_inprogress = false
        timestring = ""
        time_start = time_end = Array.new
        File.foreach(dir) do |line|
            if line.match(/\d\d:\d\d:\d\d,\d\d\d.+/)
                    timestring = line
            elsif line.match(/\d+/)
                sub_ID = line.to_i
            elsif line.match(/^\n/)

            else
       #word ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                word_count += line.split(/\s+/).length
       #symbol ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                line.split("").each do |char|
                    if char.match(/[~!@\#$%^&*()\-{}\[\]|”:><?\/]/)
                        current_line_sym += 1
                    end
       #sentence ~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    if char.match(/[A-Z]/)
                        sentence_inprogress = true
                    end
                    if char.match(/[.!?]/) && sentence_inprogress == true
                        sentence_count += 1
                        sentence_inprogress = false
                    end
                end
                symbol_count += current_line_sym
                if max_line_symbol < current_line_sym
                    max_line_symbol = current_line_sym
                end
                current_line_sym = 0
       #line ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                line_count += 1
            end
        end

        time_end = timestring.scan(/\d+/).map! { |str| str.to_i}
        time_start = IO.readlines(dir)[1].scan(/\d+/).map! { |str| str.to_i}
        duration = (time_end[4]-time_start[0])*3600 + (time_end[5]-time_start[1])*60 + (time_end[6]-time_start[2]) + (time_end[7]-time_start[3]).to_f/1000
        avr_symbol_line = (symbol_count/line_count.to_f).round(2)
        avr_symbol_sentence = (symbol_count/sentence_count.to_f).round(2)
        hash["number_of_words"] = word_count
        hash["number_of_symbols"] = symbol_count
        hash["number_of_lines"] = line_count
        hash["average_symbols_per_line"] = avr_symbol_line
        hash["max_symbols_per_line"] = max_line_symbol
        hash["number_of_sentences"] = sentence_count
        hash["average_symbols_per_sentence"] = avr_symbol_sentence
        hash["duration"] = duration.round()
        hash["average_duration"] = (duration/sub_ID).round(2)
        return hash
    end
end
