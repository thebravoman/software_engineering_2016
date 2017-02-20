require_relative "./srtparser_library/version"

module SRTParser
    private_class_method def self.number_of_words(line)
        line.scan(/\b[\p{L}']+(?!>)\b/).size
    end

    private_class_method def self.number_of_symbols(line)
        count_symbols = 0
        if (number_of_words(line) > 0)
            count_symbols = line.scan(/[-~!@#$%^&*()\[\]{}|”:><?\/]/).size
        end
        count_symbols
    end

    private_class_method def self.number_of_lines(line)
        count_lines = (number_of_words(line) > 0) ? 1 : 0
    end

    private_class_method def self.number_of_sentences(line, unfinished_sentence)
        count_sentences = {}
        count_sentences['count'] = 0
        if (number_of_words(line) > 0)
            line.each_char { |c|
                if (c =~ /\p{Lu}/)
                    count_sentences['unfinished?'] = true
                elsif (c =~ /[.!?]/ && (count_sentences['unfinished?'] || unfinished_sentence))
                    count_sentences['unfinished?'] = false
                    unfinished_sentence = false
                    count_sentences['count'] += 1
                end
            }
        end
        if (count_sentences['unfinished?'].nil?)
            count_sentences['unfinished?'] = unfinished_sentence
        end
        count_sentences
    end

    private_class_method def self.string_to_time(string)
        hours = string.match(/^[0-9]{2}/).to_s
        minutes = string.match(/(?<=:)[0-9]{2}(?=:)/).to_s
        seconds = string.match(/(?<=:)[0-9]{2}(?=,)/).to_s
        miliseconds = string.match(/(?<=,)[0-9]{3}/).to_s
        time = (hours.to_i * (60 ** 2) + minutes.to_i * 60 \
             + seconds.to_i + miliseconds.to_i.fdiv(1000))
        time
    end

    private_class_method def self.get_averages(subs_info, number_of_subs)
        if (subs_info['number_of_lines'] == 0)
            subs_info['average_symbols_per_line'] = 0.0
        else
            subs_info['average_symbols_per_line'] = subs_info['number_of_symbols'].fdiv(subs_info['number_of_lines']).round(2)
        end
        if (subs_info['number_of_sentences'] == 0)
            subs_info['average_symbols_per_sentence'] = 0.0
        else
            subs_info['average_symbols_per_sentence'] = subs_info['number_of_symbols'].fdiv(subs_info['number_of_sentences']).round(2)
        end
        if (number_of_subs == 0)
                subs_info['average_duration'] = 0.0
        else
            subs_info['average_duration'] = subs_info['duration'].fdiv(number_of_subs).round(2)
        end
        subs_info
    end

    private_class_method def self.get_duration(line, duration)
        if (line.scan(/(?<=--> )(?<time>[0-9]{2}):\g<time>:\g<time>,[0-9]{3}/).size > 0)
            subs_end = line.match(/(?<=--> )(?<time>[0-9]{2}):\g<time>:\g<time>,[0-9]{3}\s*$/).to_s
            duration = string_to_time(subs_end)
        end
        duration
    end

    private_class_method def self.initialize_keys(default_value)
        subs_info = {}
        keys = Array[
            'number_of_words',
            'number_of_symbols',
            'number_of_lines',
            'number_of_sentences',
            'duration',
            'max_symbols_per_line'
        ]
        keys.each { |key| subs_info[key] = default_value }
        subs_info
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
            subs_info['duration'] = get_duration(line, subs_info['duration'])
            if (number_of_symbols(line) > subs_info['max_symbols_per_line'])
                subs_info['max_symbols_per_line'] = number_of_symbols(line)
            end
            if (line.scan(/^[0-9]+\s*$/).size > 0)
                number_of_subs += 1
            end
        end
        if (number_of_subs == 0)
            subs_info = initialize_keys(0)
        end
        subs_info = get_averages(subs_info, number_of_subs)
        subs_info['duration'] = subs_info['duration'].round(2)
        subs_info
    end
end
