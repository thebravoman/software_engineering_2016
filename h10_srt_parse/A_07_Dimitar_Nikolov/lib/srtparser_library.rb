require "srtparser_library/version"
require "chronic_duration"

module SRTParser
  def self.parse_file(path_to_file)
    content = File.read(path_to_file)
    subtitles = content.split(/\d+\s\d+:\d+:\d+,\d+\s-->\s\d+:\d+:\d+,\d+/)
                        .join.strip
    info = Hash.new
    info["number_of_words"] = number_of_words(subtitles)
    info["number_of_symbols"] = number_of_symbols(subtitles)
    info["number_of_lines"] = number_of_lines(subtitles)
    info["average_symbols_per_line"] = average_symbols_per_line(subtitles)
    info["max_symbols_per_line"] = max_symbols_per_line(subtitles)
    info["number_of_sentences"] = number_of_sentences(subtitles)
    info["average_symbols_per_sentence"] = average_symbols_per_sentence(subtitles)
    info["duration"] = duration(content)
    info["average_duration"] = average_duration(content)
    info
  end
  def self.number_of_words(subtitles)
    pattern = /([A-Za-z0-9’'])+/
    subtitles.scan(pattern).length
  end
  def self.number_of_symbols(subtitles)
    pattern = /[\~\!\@\#\$\%\^\&\*\(\)\-\{\}\[\]\|\”\:\>\<\?\/]/
    subtitles.scan(pattern).length
  end
  def self.number_of_lines(subtitles)
    pattern = /.+/
    subtitles.scan(pattern).length
  end
  def self.average_symbols_per_line(subtitles)
    average = number_of_symbols(subtitles) / number_of_lines(subtitles).to_f
    average.round(2)
  end
  def self.max_symbols_per_line(subtitles)
    pattern = /.+/
    max_symbols = 0
    subtitles.scan(pattern).each do |line|
      symbols = number_of_symbols(line)
      max_symbols = symbols if symbols > max_symbols
    end
    max_symbols
  end
  def self.number_of_sentences(subtitles)
    pattern = /["']?[A-Z][^.?!]+((?![.?!]['"]?\\s["']?[A-Z][^.?!]).)+[.?!'"]+/
    subtitles.scan(pattern).length
  end
  def self.average_symbols_per_sentence(subtitles)
    average = number_of_symbols(subtitles) / number_of_sentences(subtitles).to_f
    average.round(2)
  end
  def self.duration(content)
    pattern = /\d+:\d+:\d+,\d+/
    time = content.scan(pattern).last.tr(',', '.')
    ChronicDuration.parse(time).round(2)
  end
  def self.number_of_subtitles(content)
    pattern = /\d+:\d+:\d+,\d+\s-->\s\d+:\d+:\d+,\d+/
    content.scan(pattern).length
  end
  def self.average_duration(content)
    average = duration(content) / number_of_subtitles(content).to_f
    average.round(2)
  end
  private_class_method :number_of_words, :number_of_symbols, :number_of_lines,
                       :average_symbols_per_line, :max_symbols_per_line,
                       :number_of_sentences, :average_symbols_per_sentence,
                       :duration, :number_of_subtitles, :average_duration
end
