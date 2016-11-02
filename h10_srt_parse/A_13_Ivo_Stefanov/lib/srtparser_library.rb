require "srtparser_library/version"

module SRTParser

def SRTParser.parse_file(file)

countLines = 0
countWords = 0
countSymbols = 0
countMaxsymbols = 0
i=0
m=0
arr = Array.new()
time = Array.new()
countSentences = 0
countSubtitles = 0


srt=File.open(file, "r") do |f|
  f.each_line do |line|
	if line=~/\d+[:]\d+[:]\d+[,]\d+/ || line=~/[1-9]+[0-9]*/ || line.chomp.empty?
	else
    		countLines+=1

		countWords = countWords + line.split.size

		countSymbols = countSymbols + line.scan(/([~!@#$%^&*()\-{}\[\]\|\"\:><?\/])/).length

		countMaxsymbols = line.scan(/([~!@#$%^&*()\-{}\[\]\|\"\:><?\/])/).length
		arr[i] = countMaxsymbols
		i +=1

		countSentences = countSentences + line.scan(/[^\.!?]+[\.!?]/).map(&:strip).count
	end
	
	if line=~/\d+[:]\d+[:]\d+[,]\d+/
		countSubtitles += 1
		time[m] = line
		m+=1
	end
  end
end
srt.close

max=arr[0]
n=0
while n<i
	if arr[n]>max
		max=arr[n]
	end
	n+=1
end

countSymbols = countSymbols.to_f
avrSymbolsLines = countSymbols/countLines
avrSymbolsLines = avrSymbolsLines.round(2)

avrSymbolsSentences = countSymbols/countSentences
avrSymbolsSentences = avrSymbolsSentences.round(2)
countSymbols = countSymbols.to_i

m-=1
dur = time[m].split
dur[2] = dur[2].gsub(',','.')
duration = dur[2].split(':')
seconds = duration[0].to_f * 3600 + duration[1].to_f * 60 + duration[2].to_f

avrDuration = seconds/countSubtitles


	output=	{	
			"number_of_words" => countWords,
			"number_of_symbols" => countSymbols,
			"number_of_lines" => countLines,
			"average_symbols_per_line" => avrSymbolsLines,
			"max_symbols_per_line" => max,
			"number_of_sentences" => countSentences,
			"average_symbols_per_sentence" => avrSymbolsSentences,
			"duration" => seconds.round(2),
			"average_duration" => avrDuration.round(2)
		}
	return output
end
end