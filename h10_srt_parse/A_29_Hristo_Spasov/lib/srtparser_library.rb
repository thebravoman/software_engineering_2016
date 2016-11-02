require_relative "./srtparser_library/version"

module SRTParser
    private_class_method def self.number_of_words(line)
        return line.scan(/\b[\p{L}']+(?!>)\b/).size
    end

    private_class_method def self.number_of_symbols(line)
        if(number_of_words(line) > 0)
            return line.scan(/[-~!@#$%^&*()\[\]{}|”:><?\/]/).size
        else
            return 0
        end
    end

    private_class_method def self.number_of_lines(line)
        number_of_words(line) > 0 ?
            (return 1) : (return 0)
    end

    private_class_method def self.number_of_sentences(line, unfinished_sentence)
        count_sentences = {}
        if(number_of_words(line) > 0)
            if(line.scan(/[.!?](?!\p{L})*/).size > 0)
                count_sentences['unfinished?'] = false
                count_sentences['count'] = line.scan(/\p{Lu}[^.!?]*[.!?]/).size
                if(unfinished_sentence && line.scan(/(?<![.])[.](?![.])/).size == line.scan(/\p{Lu}[^.!?]*[.!?]/).size + 1)
                    count_sentences['count'] += 1
                end
            else
                count_sentences['unfinished?'] = true
                count_sentences['count'] = line.scan(/\p{Lu}[^.!?]*[.!?]/).size
                if(unfinished_sentence && result = line.match(/(?<![.])[.](?![.])/))
                    count_sentences['count'] += 1
                end
            end
        else
            count_sentences['count'] = 0
            count_sentences['unfinished?'] = unfinished_sentence
        end
        return count_sentences
    end

    private_class_method def self.string_to_time(string)
        hours = string.match(/^[0-9]{2}/).to_s
        minutes = string.match(/(?<=:)[0-9]{2}(?=:)/).to_s
        seconds = string.match(/(?<=:)[0-9]{2}(?=,)/).to_s
        miliseconds = string.match(/(?<=,)[0-9]{3}/).to_s
        time = (hours.to_i * (60 ** 2) + minutes.to_i * 60 \
             + seconds.to_i + miliseconds.to_i.fdiv(1000))
        return time
    end

    def self.parse_file(file)
        subs_info = Hash.new(0)
        count_sentences = Hash.new(0)
        number_of_subs = 0
        count_sentences['unfinished?'] = false
        File.open(file).each do |line|
            subs_info['number_of_words'] += number_of_words(line)
            subs_info['number_of_symbols'] += number_of_symbols(line)
            subs_info['number_of_lines'] += number_of_lines(line)
            count_sentences = number_of_sentences(line, count_sentences['unfinished?'])
            subs_info['number_of_sentences'] += count_sentences['count']
            if (line.scan(/(?<=--> )(?<time>[0-9]{2}):\g<time>:\g<time>,[0-9]{3}/).size > 0)
                subs_end = line.match(/(?<=--> )(?<time>[0-9]{2}):\g<time>:\g<time>,[0-9]{3}\s*$/).to_s
                subs_info['duration'] = string_to_time(subs_end)
            end
            if(number_of_symbols(line) > subs_info['max_symbols_per_line'])
                subs_info['max_symbols_per_line'] = number_of_symbols(line)
            end
            if (line.scan(/^[0-9]+\s*$/).size > 0)
                number_of_subs += 1
            end
        end
        subs_info['average_symbols_per_line'] = subs_info['number_of_symbols'].fdiv(subs_info['number_of_lines']).round(2)
        subs_info['average_symbols_per_sentence'] = subs_info['number_of_symbols'].fdiv(subs_info['number_of_sentences']).round(2)
        subs_info['average_duration'] = subs_info['duration'].fdiv(number_of_subs).round(2)
        return subs_info
    end
end
