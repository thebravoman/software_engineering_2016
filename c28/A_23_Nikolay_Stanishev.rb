require 'json'

def take_content(filename)
  if not File.directory?(filename)
    File.read(filename).gsub(/\s+/, '')
  end
end

fr = {}

Dir.glob(ARGV[0] + '/**/*_*_*_*.txt') do |file|
  content = take_content(file)
  if content
    final_result = 0
    # begin
      result = `curl -X POST --data {name: 'nekva shlokavica'} #{content}/articles`
      articles = `curl #{content}/articles`
      
      r = `curl #{content}/articles/#{result['id']}`
      if articles.include?(result) and r['name'] == result['name']
        final_result += 1
      end
      # old_result = JSON.parse(result)["count"]
      # (1..@number_of_visits).each do ||
      #   `curl -X POST --data "user=#{@index}" #{content}/visits`
      # end
      # result = `curl #{content}/visits?user=#{@index}`
      # new_result = JSON.parse(result)["count"]
      # if (new_result - old_result) == @number_of_visits
      #   puts 'ok'
      # else
      #   puts 'not ok'
      # end
      fr[content] = final_result
    # rescue JSON::ParserError
    # end
  end
end
print fr
