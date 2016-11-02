class SRTParser
 
    def div (num)
        while num.to_s.split('.')[0].to_i != 0
            num = num / 10
        end
 
        return num
    end
 
    def max_symbols_per_line (line, maxSym)
        curSym = line.scan(/[~!@#$%^&*\(\)\-\{\}\[\]|”:><?\/]/).count
 
        if curSym > max
            return curSym
        else
            return maxSym
        end
 
    end
 
    def parse_file(path_to_file)
        file = File.open(ARGV[0], "r")
 
        parseRes = Hash.new
        lineNum = 0
        numWords = 0
        numSymbols = 0
        sentenceCount = 0
        srt = []
        allTime = 0;
        subsCount = 0;
        maxSym = 0;
 
        File.foreach(ARGV[0]) do |line|
 
            if ((line[0].ord >= 'a'.ord ) && (line[0].ord <= 'z'.ord)) || ((line[0].ord >= 'A'.ord) && (line[0].ord <= 'Z'.ord))
                lineNum += 1
                numWords += line.split.count
                numSymbols += line.scan(/[~!@#$%^&*\(\)\-\{\}\[\]|”:><?\/]/).count
                sentenceCount += line.scan(/[^\.!?]+[\.!?]/).count
                srt << line
            end
 
            if line =~ /-->/
                time1 = line.split(" --> ")[0]     
                time2 = line.split(" --> ")[1]
 
                time11 = time1.split(':')[0].to_f * 3600.0 + time1.split(':')[1].to_f * 60.0 + time1.split(':')[2].split(',')[0].to_f + div(time1.split(':')[2].split(',')[1].to_f)
                time22 = time2.split(':')[0].to_f * 3600.0 + time2.split(':')[1].to_f * 60.0 + time2.split(':')[2].split(',')[0].to_f + div(time2.split(':')[2].split(',')[1].to_f)
                #time111 -= time11
 
                time33 = time22 - time11
                allTime += time33
                subsCount += 1
                #puts div(time11.to_f)
               
            end
 
            maxSym = max_symbols_per_line(line, maxSym)
 
        end
 
        parseRes["duration"] = allTime.round
        parseRes["average_duration"] = (allTime / subsCount).round(2)
        parseRes["max_symbols_per_line"] = maxSym
        parseRes["number_of_words"] = numWords
        parseRes["number_of_symbols"] = numSymbols
        parseRes["number_of_lines"] = lineNum
        parseRes["average_symbols_per_line"] = numSymbols/lineNum
 
    end
 
end
