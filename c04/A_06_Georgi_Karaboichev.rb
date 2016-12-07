require 'csv'

def GetMostWatchedVideo(users)
    mostWatchedVideoTime = 0
    mostWatchedVideo = 0

    users.each_with_index do |user, index|

        i = index + 1
        currentVideo = user[1]
        watchedTime = user[2].to_i
        while i < users.length
            if(currentVideo == users[i][1])
                watchedTime += users[i][2].to_i
            end

            i += 1
        end

        if(mostWatchedVideoTime < watchedTime)
            mostWatchedVideoTime = watchedTime
            mostWatchedVideo = currentVideo
        end
    end

    return mostWatchedVideo
end

pathToFile = ARGV[0]
taskToDo = ARGV[1].to_i

users = CSV.read(pathToFile)
if (taskToDo == 1)
    puts GetMostWatchedVideo(users)
elsif (taskToDo == 2)
    # TO DO
elsif (taskToDo == 3)
    # TO DO
elsif (taskToDo == 4)
    # To DO
else
    puts 'Invalid Command'
end
