def sub(file)
	subtitles=[]
	file.each_line do |line|
		if !(line.match(/#{"^\\d+$"}/) || line.match(/#{"\\d+:\\d+:\\d+,\\d+\\s\-\-\>\\s\\d+:\\d+:\\d+,\\d+"}/) || line.match(/#{"^$"}/) )
			subtitles.push(line);
		end
	end
	return subtitles
end

def words_symbols_lines(file)	
	count_w = 0
	count_s = 0 
	max_s = 0
	subtitles = sub(file)
	count_l = subtitles.size
	subtitles.each do |line| 
		count_w += (line.split(/\s+/).length).to_i
		i =  line.scan(/#{"[~!@#$%^&*(){}\\[\\]|:><?\"\\\/-]"}/).count
		if i > max_s
			max_s = i
		end
		count_s+= i		
	end
	avrg_s = count_s.to_f/count_l.to_f
	return count_w,count_s,count_l,avrg_s.round(2),max_s
end	

def sentance(file)
	subtitles=sub(file)
	s=subtitles.to_s
	count=s.scan(/(?<=[A-Z]).*?(?=\.|!|\?")/).count
	return count
end

def duration(file)
	number=0
	duration=0
	file.each_line do |l|
		if l.match(/#{"^\\d+$"}/)
			if l.to_i > number
				number = l.to_i
			end
		end
		if l.match(/#{"\\d+:\\d+:\\d+,\\d+\\s\-\-\>\\s\\d+:\\d+:\\d+,\\d+"}/)
			seconds=((l[17].to_i*10+l[18].to_i)*3600).to_f + ((l[20].to_i*10+l[21].to_i)*60).to_f  + ((l[26].to_i*100+l[27].to_i*10+l[28].to_i).to_f/1000.to_f).to_f + (l[23].to_i*10+l[24].to_i).to_f

			if duration < seconds
				duration = seconds
			end
		end
	end
	avrg_dur = (duration/number).to_f
	return duration.round(2),avrg_dur.round(2)
end	
				

class SRTParser
	def self.parse_file(path)
		file = File.read(path)
		data=words_symbols_lines(file)
		data[5] = sentance(file)
		data[6] = (data[1].to_f/data[5].to_f).round(2)
		data1=duration(file)
		
		result = {"number_of_words" => data[0], "number_of_symbols" => data[1], "number_of_lines"=> data[2] , "average_symbols_per_line" => data[3], "max_symbols_per_line" => data[4],
 "number_of_sentences" => data[5], "average_symbols_per_sentence" => data[6], "duration" => data1[0], "average_duration" => data1[1] }		
		return result


	end

	
end


