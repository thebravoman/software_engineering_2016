fileName = ARGV[0].to_s
fileObj = File.new(fileName, "r")
symba = Array.new()
while line = fileObj.gets
	ayra = line.split(",").map(&:to_f)
	symba |= [ayra]
end
print symba
fileObj.close
