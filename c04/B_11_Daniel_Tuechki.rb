require 'csv'

path_to_file = ARGV[0].to_s

user = []
video = []
count = []

CSV.foreach(File.path(path_to_file)) do |row|

	user << row[0].to_i
	video << row[1].to_i
	count << row[2].to_f
		
end


task_1 = Hash.new

i = 0
sum = 0

video.each do |every_video|

	sum = sum + count[i]

    	task_1[every_video]  = sum

end
puts task_1
