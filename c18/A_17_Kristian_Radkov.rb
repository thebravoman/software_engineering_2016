n = ARGV[0]
cmd = `crunch #{n} #{n} abcdefghijklmnopqrstuvwxyz -o /root/Desktop/wordlist.txt`
puts `#{cmd}`