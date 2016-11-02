SYMBOLS_CONST = %r/~|!|@|#|\$|%|\^|&|\*|\(|\)|-|{|}|\[|\]|\||"|:|>|<|\?|\//
SPACE_CONST = /\s/
SENTENCE_CONST = /(?<=[A-Z]).*?(?=\.|!|\?)/
NEW_LINE_CONST = /\n/

def get_data(file)
  data = []
  file.read.each_line do |line|
    data.push(line)
  end
  data
end

def get_time(file)
  data = get_data(file)
  time = {}
  time[1] = data[1].chomp
  (0..data.length).each do |index|
    if data[index].eql?("\n") && index != data.length - 1
      time[data[index + 1].chomp.to_i] = data[index + 2].chomp
    end
  end
  time
end

def get_text_group(index, data)
  text_group = {}
  index -= 1 if index.zero?
  key = data[index + 1].chomp.to_i
  text_group[key] = data[index + 3]
  temp_index = index + 4
  while data[temp_index] != "\n" && temp_index != data.length
    text_group[key] += data[temp_index]
    temp_index += 1
  end
  text_group[key] = text_group[key].chomp if text_group[key][-1].eql?("\n")
  text_group
end

def get_text(file)
  data = get_data(file)
  text = {}
  (0..data.length).each do |index|
    if (data[index].eql?("\n") || index.zero?) && index != data.length - 1
      text.update(get_text_group(index, data))
    end
  end
  text
end

def scan_(text, key)
  number = text[key].scan(SENTENCE_CONST).length
  number
end

def split_(text, key)
  number = text[key].split(SPACE_CONST).length
  number
end

def number_of(text, regex)
  number_of = 0
  (1..text.keys.max).each do |key|
    if regex == SENTENCE_CONST
      number = scan_(text, key)
    elsif regex == SPACE_CONST
      number = split_(text, key)
    end
    number_of += number
  end
  number_of
end

def number_of_words(text)
  number_of_words = number_of(text, SPACE_CONST)
  number_of_words
end

def number_of_symbols_group(group)
  number_of_symbols = group.scan(SYMBOLS_CONST).length
  number_of_symbols
end

def number_of_symbols(text)
  number_of_symbols = 0
  (1..text.keys.max).each do |key|
    if text[key].scan(SYMBOLS_CONST)
      number_of_symbols += number_of_symbols_group(text[key])
    end
  end
  number_of_symbols
end

def number_of_lines(text)
  number_of_lines = 0
  (1..text.keys.max).each do |key|
    if text[key].scan(NEW_LINE_CONST)
      number_of_lines += text[key].scan(NEW_LINE_CONST).length + 1
    else
      number_of_lines += 1
    end
  end
  number_of_lines
end

def average_symbols(text, number_of_divisor)
  number_of_symbols = number_of_symbols(text)
  average_symbols = number_of_symbols.to_f / number_of_divisor.to_f
  average_symbols.round(2)
end

def average_symbols_per_line(text)
  average_symbols_per_line = average_symbols(text, number_of_lines(text))
  average_symbols_per_line.round(2)
end

def max_symbols_per_line(text)
  symbols_max = 0
  (1..text.keys.max).each do |key|
    text[key].split(/\n/).each do |line|
      symbols = number_of_symbols_group(line)
      symbols_max = symbols if symbols > symbols_max
    end
  end
  symbols_max
end

def number_of_sentences(text)
  number_of_sentences = number_of(text, SENTENCE_CONST)
  number_of_sentences
end

def average_symbols_per_sentence(text)
  average_symbols_per_sentence = average_symbols(text, number_of_sentences(text))
  average_symbols_per_sentence
end

def get_duration(time)
  max = time.keys.max
  duration = time[max]
  duration.slice!(0, 17)
  duration = (duration[0].to_i * 10 + duration[1].to_i).to_f * 60 * 60 +
             (duration[3].to_i * 10 + duration[4].to_i).to_f * 60 +
             (duration[6].to_i * 10 + duration[7].to_i).to_f +
             (duration[9].to_i * 100 + duration[10].to_i * 10 +
              duration[11].to_i).to_f / 60
  duration
end

def duration(time)
  duration = get_duration(time)
  duration.round(2)
end

def average_duration(time)
  duration = get_duration(time) / time.keys.max
  duration.round(2)
end

class SRTParser
  def parse_file(path_to_file)
    result = {}
    text = get_text(File.open(path_to_file))
    time = get_time(File.open(path_to_file))
    result['max_symbols_per_line'] = max_symbols_per_line(Marshal.load(Marshal.dump(text)))
    result['average_symbols_per_sentence'] = average_symbols_per_sentence(Marshal.load(Marshal.dump(text)))
    result['number_of_sentences'] = number_of_sentences(Marshal.load(Marshal.dump(text)))
    result['average_symbols_per_line'] = average_symbols_per_line(Marshal.load(Marshal.dump(text)))
    result['number_of_words'] = number_of_words(Marshal.load(Marshal.dump(text)))
    result['number_of_symbols'] = number_of_symbols(Marshal.load(Marshal.dump(text)))
    result['number_of_lines'] = number_of_lines(Marshal.load(Marshal.dump(text)))
    result['duration'] = duration(Marshal.load(Marshal.dump(time)))
    result['average_duration'] = average_duration(Marshal.load(Marshal.dump(time)))
    result
  end
end

# file = SRTParser.new
# puts file.parse_file('test.srt')
