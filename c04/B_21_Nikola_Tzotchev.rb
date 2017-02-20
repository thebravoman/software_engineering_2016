require 'csv'
watched = Array.new()
data_videos = CSV.read("data.csv")
#puts data_videos[0][0..2]
data_videos.map{|row| row[1,2]}.each do |video|
	num_vid = Integer(video[0])
	num_wat = Float(video[1])
	if watched.size < num_vid
		elements_to_add = (num_vid - watched.size )
		0.upto(elements_to_add) do
			watched << 0
		end
	end
	watched[ num_vid ] = watched[ num_vid ] + num_wat
end

puts watched.max

=begin
if a.size < num_vid
	elements_to_add = (num_vid-size)
	0.upto(elements_to_add) do
		a << 0
	end
end

[0,0,0,0,0]

0.upto(3) do
	a << 0
end


[0,0,0,0,0,0,0,0]

[2] -> [,,x]
=end
