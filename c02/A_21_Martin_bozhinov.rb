dir = gets
puts Dir[File.join(dir, '**', '*')].count { |file| File.file?(file) }


