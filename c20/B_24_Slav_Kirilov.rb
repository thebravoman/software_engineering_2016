number = ARGV[0]
exceptions = /#{Regexp.quote(ARGV[1])}/ || '\0'
allarray = ('a'..'z').to_a
allarray.delete(exceptions)

#allarray.map! { |elem| elem.gsub(exceptions, '') }
out = allarray.repeated_permutation(number.to_i).to_a.map(&:join)
puts out
#outfile = File.new("bruteforce", "w") {|file| file.write(out + '\n')}
