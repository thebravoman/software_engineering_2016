puts	Dir.glob(File.join("/home/elsyser/Downloads/software_engineering_2016-master/c01_introduction", '**', '*.txt')).select { |file| File.file?(file) }.count

a =Dir.entries("/home/elsyser/Downloads/software_engineering_2016-master/c01_introduction")




 a.each do |s|
    s.gsub!('_', ',')
end
a.each do |s|
    s.gsub!('.txt', '')
end

puts a
