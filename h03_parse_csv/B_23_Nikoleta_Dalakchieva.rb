require 'csv'
require 'matrix'
file = ARGV[0]
task = ARGV[1].to_i
data = Array.new(3){Array.new()}
numb = Array.new(1){Array.new()}
CSV.foreach(file) do |row|
	data[0] << row[0]
	data[1] << row[1]
	data[2] << row[2]
end

if task == 1
	video_percent = Hash.new(0)
	CSV.foreach(file) do |row|
		video = row[1]
		percent = row[2]
		video_percent[video] += percent.to_f
	end
	puts "#{video_percent.key(video_percent.values.max)},#{video_percent.values.max.round(2)}"

elsif task == 2
	freq = data[1].inject(Hash.new(0)) { |h,v| h[v] += 1; h }
	x = data[1].max_by { |v| freq[v] }
	puts "#{x},#{freq[x]}"

elsif task == 3
	video_percent = Hash.new(0)
	CSV.foreach(file) do |row|
		video = row[0]
		percent = row[2]
		video_percent[video] += percent.to_f
	end
	puts "#{video_percent.key(video_percent.values.max)},#{video_percent.values.max.round(2)}"
		

elsif task == 4
	freq = data[0].inject(Hash.new(0)) { |h,v| h[v] += 1; h }
	x = data[0].max_by { |v| freq[v] }
	puts "#{x},#{freq[x]}"
end
