class SRTParser
  @@num_of_subtitles = 0

  def counter(line, result_hash)
    if !duration(line, result_hash)
      symbols_counter(line, result_hash)
    end
    if line.scan(/[a-zA-Z']+/).size > 0
      result_hash["number_of_words"] += line.scan(/[a-zA-Z']+/).size
      result_hash["number_of_lines"] += 1
    end
    return line
  end

  def sentences_counter(srt_line, result_hash)
    result_hash["number_of_sentences"] = srt_line.scan(/[a-zA-Z][?!.]/).size
  end

  def symbols_counter(line, result_hash)
    symb_size = line.scan(/[~!@#$%^&*()\-\[\]{}:"<>?\/]/).size
    result_hash["number_of_symbols"] += symb_size
    if symb_size > result_hash["max_symbols_per_line"]
      result_hash["max_symbols_per_line"] = symb_size
    end
  end

  def duration(line, result_hash)
    time_str = line.scan(/\d+[:]\d+[:]\d+[,]\d+/)[1]
    if time_str.is_a? String
      @@num_of_subtitles += 1
      time_arr = time_str.scan(/[^:,]+/)
      result_hash["duration"] = time_arr[0].to_i * 3600 + time_arr[1].to_i *
                                60 + time_arr[2].to_i + (time_arr[3].to_f / 1000).round(2)
      return true
    else
      return false
    end
  end

  def parse_file(path)
    result_hash = {
      "number_of_words" => 0,
      "number_of_symbols" => 0,
      "number_of_lines" => 0,
      "max_symbols_per_line" => 0,
      "number_of_sentences" => 0,
      "average_symbols_per_sentence" => 0,
      "duration" => 0,
      "average_duration" => 0
    }
    srt_line = String.new
    File.open(path, "r") do |f|
      f.each_line do |line|
        srt_line += counter(line, result_hash)
      end
    end
    sentences_counter(srt_line, result_hash)
    result_hash["average_symbols_per_sentence"] = (result_hash["number_of_symbols"].to_f /
    result_hash["number_of_sentences"].to_f).round(2)
    result_hash["average_duration"] = (result_hash["duration"] / @@num_of_subtitles).round(2)
    printer(result_hash)
    return result_hash
  end
end
