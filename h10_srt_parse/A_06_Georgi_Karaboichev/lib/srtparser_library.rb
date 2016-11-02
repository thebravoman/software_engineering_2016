require "srtparser_library/version"

module SrtparserLibrary
    def get_words(subs)
        return subs.scan(/[a-z'A-Z]+/);
    end

    def get_symbols(subs)
        lines = get_lines(subs)
        symbols_count = 0
        
        lines.each do |line|
            symbols_count += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?]/).length 
        end

        return symbols_count
    end

    def get_lines(subs)
        return subs.scan(/^[ ,a-zA-Z.'!~!@#$%^&*()\-{}\[\]|”:><?]+$/)
    end

    def get_max_symbols_per_line(subs)
        lines = get_lines(subs)
        current = 0
        max = 0

        lines.each do |line|   
            current = get_symbols(line)

            if(max < current)
                max = current
            end 
        end

        return max
    end

    def get_number_of_sentances(subs)
        return subs.scan(/[A-Z][^.?!]+[.?!]/m)
    end

    def get_all_durations(subs)
        seconds = []
        durations = subs.scan(/[0-9]{2}+:[0-9]{2}+:[0-9]{2}+,[0-9]{3}+/)

        durations.each do |duration|
            times_of_duration = duration.split(':')

            time = 0
            multiplier = 3600
            duration_in_seconds = 0.0
            times_of_duration.each do |time|
                time = time.gsub(',', '.')
                duration_in_seconds += time.to_f * multiplier.to_f  
                multiplier /= 60.0
            end

            duration_in_seconds = duration_in_seconds.round()
            seconds.push(duration_in_seconds)
        end

        return seconds
    end


    class SRTParser
        def parse_file()
            subs = File.read("test.srt")

            durations = get_all_durations(subs)
            number_of_subtitle = subs.scan(/^[0-9]+$/)

            result = Hash.new
            result["number_of_words"] = get_words(subs).length
            result["number_of_symbols"] = get_symbols(subs)
            result["number_of_lines"] = get_lines(subs).length
            result["average_symbols_per_line"] = (result["number_of_symbols"].to_f / result["number_of_lines"].to_f).round(2)
            result["max_symbols_per_line"] = get_max_symbols_per_line(subs)
            result["number_of_sentences"] = get_number_of_sentances(subs).length
            result["average_symbols_per_sentence"] = (result["number_of_symbols"].to_f / result["number_of_sentences"].to_f).round(2)
            result["duration"] = durations[durations.length - 1] # - duration[0]
            result["average_duration"] = (result["duration"].to_f / number_of_subtitle[number_of_subtitle.length - 1].to_f).round(2)

            puts result["average_duration"]
        end 
    end

    srt_parser = SRTParser. new
    srt_parser.parse_file()

end
