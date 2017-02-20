File.open(ARGV[0], 'a') do |file|
  range = 'a'*6 .. 'z'*6
  for i in range do
    file.puts i
  end
end
