require "csv"

directory = ARGV[0]
task = ARGV[1].to_i


csv = CSV.read(directory, :headers => true)

class Video 
	def initialize(id, time)
		@id = id
		@watched = 1
		@timewatched = time
	end
	
	def get_id
		return @id
	end

	def times_watched  
		return @watched
	end

	def time_watched
		return @timewatched
	end

	def add_watch
		@watched = @watched + 1
	end

	def add_time(time)
		@timewatched = @timewatched + time
	end 
end

class User 
	def initialize(id, time)
		@id = id
		@watched = {}
		@timewatched = time
	end

	def get_id
		return @id
	end

	def videos_watched  
		return @watched
	end

	def time_watched
		return @timewatched
	end
	def add_view(video_id)
		if @watched[video_id] != nil		
			@watched[video_id]=@watched[video_id]+1
		else
			@watched[video_id]=1
		end
	end

	def add_time(time)
		@timewatched = @timewatched + time
	end
end

videos = []
users = []

for i in 0..csv['video'].length - 1
	for l in 0..videos.length #Add data to videos
		if(videos[l] == nil)
			videos[l] = Video.new(csv['video'][i], csv['watched'][i])
		elsif(videos[l].get_id == csv['video'][i])
			videos[l].add_watch
			videos[l].add_time(csv['watched'][i])
		end
	end
	for l in 0..users.length #Add data to users
		if(users[l] == nil)
			users[l] = User.new(csv['user'][i], csv['watched'][i])
		elsif(users[l].get_id == csv['user'][i])
			users[l].add_watch(csv['video'][i])
			users[l].add_time(csv['watched'][i])
		end
	end
end

p videos
