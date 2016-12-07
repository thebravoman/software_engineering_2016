puts Dir.glob(File.join("/home/elsyser/Desktop/software_engineering_2016-master/c01_introduction ", '**', '*.txt')).select { |file| File.txt?(file) }.count
