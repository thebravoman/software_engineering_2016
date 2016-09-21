puts Dir["software_engineering_2016/c01_introduction/*.txt"].length

Dir.glob('software_engineering_2016/c01_introduction/*.txt').each do |path|
puts File.basename(path, '.txt').gsub("_",",")
 
end
