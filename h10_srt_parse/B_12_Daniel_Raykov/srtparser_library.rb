class SRTParser

def parse_file(path_to_file)
hash = Hash.new
duration_hash = {}
counter = 0

File.open(path_to_file, "r") do |file_line|
   			
file_line.each_line() do |str_line|
   				
hash["number_of_words"] += line.scan(/([A-Za-z]['A-Za-z]+)/).size
hash["number_of_symbols"] += line.scan(/[~!@#$%^&*()\-{}\[\]|”:><?\/]/).size

if line =~ /[A-Za-z]+/
hash["number_of_lines"] += 1	
end

if  number_of_symbols(line) > hash["max_symbols_per_line"]
hash["max_symbols_per_line"] = number_of_symbols(line)
end

if line =~ /([A-Z][^\.!?]+)[\.!?]/
parsed_hash["number_of_sentences"] += 1
end

if (/-->/).match(str_line)
then duration_hash = Hash[ [:from, :to].zip(str_line.gsub!(" ","").chop.split(/-->/)) ] end

if /\b\d\b/.match(str_line) then counter += 1

end

end

end

hash["average_symbols_per_line"] =
(hash["number_of_symbols"].to_i/hash["number_of_lines"].to_f).round(2)

avr = hash["number_of_symbols"].to_i/hash["number_of_sentences"].to_f
hash["average_symbols_per_sentence"] = avr.round(2)

hash["duration"] = duration_hash[:to]

hash["average_duration"] = (hash["duration"].to_f/counter.to_f).round(2)

return hash

end

end
