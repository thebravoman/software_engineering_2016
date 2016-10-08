if (File.open(ARGV[0]).keys - File.open(ARGV[1]).keys).to_s == "[]" then p "1" else p "0" end
