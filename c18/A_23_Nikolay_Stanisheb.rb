pass_len = ARGV[0].to_i
start = 'a' * pass_len
result = []
result << start
result.map do |el|
    break if result.length == 26 ** pass_len
    result << el.succ
end
File.open('pass.txt', 'w') do |file|
    result.each do |row|
        file.write(row)
        file.write('\n')
    end
end
