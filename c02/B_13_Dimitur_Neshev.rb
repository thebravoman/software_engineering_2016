Dir.glob(File.join("/home/elsyser/Desktop/software_engineering_2016-master/c01_introduction", '**', '*.txt')).select { |file| File.file?(file) }.count
puts Dir.entries("/home/elsyser/Desktop/software_engineering_2016-master/c01_introduction").select {|f| !File.directory? f}
