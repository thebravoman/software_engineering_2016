n = ARGV[0].to_i

open('./file.txt', 'w') do |f|
   f << ('a'..'z').to_a.repeated_permutation(n).map(&:join).join("\n")
end
