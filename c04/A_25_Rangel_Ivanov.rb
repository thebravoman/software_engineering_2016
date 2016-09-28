require 'csv'
video_list = CSV.read 'video.csv'
h = {}
video_list.each do |user|
    if h.key?(user[1])
        
    else
        h.merge!(user[1]: user[2])
    end
