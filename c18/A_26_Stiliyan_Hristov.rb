filename = ARGV[0]


file = File.open(filename,"w") do |file|
  file.write(('a' * ARGV[1]) ..  'z'*ARGV[1].to_i).to_a);
end
