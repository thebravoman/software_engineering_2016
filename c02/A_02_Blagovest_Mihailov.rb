
a=Dir.glob(File.join(ARGV[0], '**', '*')).select { |file| File.file?(file) }.count
b=Dir["/home/elsyser/software_engineering_2016/c01_introduction/*"]

puts b

puts a

