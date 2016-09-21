puts Dir.glob(File.join('home/elsyser/Desktop', '**', '*')).select { |file| File.file?(file) }.count
