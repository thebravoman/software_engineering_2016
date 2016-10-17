require 'csv'

$videos = Hash.new

def most_watched_by_percent(row)
	video = row[1]
	percent = row[2].to_f
	
	if $videos[video] == nil
		$videos[video] = percent
		
	else
		$videos[video] += percent
		
	end
	 
end


def most_watched_by_open(row)

	video = row[1].to_i
	
	if $videos[video] == nil
		$videos[video] = 1		
	else
		$videos[video] += 1
		
	end
end
def most_watched_by_userPercent(row)
	
	user = row[0]
	percent = row[2].to_f

	if $videos[user] == nil
		$videos[user] = percent	
	else
		$videos[user] += percent
		
	end
end

def user_who_watched_most_videos(row)
	
	user = row[0]
	

	if $videos[user] == nil
		$videos[user] = 1
	else
		$videos[user] += 1
		
	end
end

num = ARGV[1].to_i

CSV.foreach('data.csv') do |row|
	if num == 1
		most_watched_by_percent row 
	elsif num == 2
		most_watched_by_open row
	elsif num == 3
		most_watched_by_userPercent row
	elsif num == 4
		user_who_watched_most_videos row
	end
end

if num == 1 || num == 3
	puts  "#{$videos.max_by{|k,v| v}[0]},#{$videos.max_by{|k,v| v}[1].round(2)}"
elsif num == 2 || num == 4
	puts  "#{$videos.max_by{|k,v| v}[0]},#{$videos.max_by{|k,v| v}[1]}"

end
