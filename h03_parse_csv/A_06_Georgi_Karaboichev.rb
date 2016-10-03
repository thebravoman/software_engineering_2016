require 'csv'

def RoundNumber(number)
    if(number % 1 != 0)
        return number.round(2)
    end

    return number.floor()
end

def GetMostWatchedVideo(users)
    mostWatchedVideoTime = 0
    mostWatchedVideo = 0

    users.each_with_index do |user, index|

        i = index + 1
        currentVideo = user[1]
        watchedTime = user[2].to_f
        while i < users.length
            if(currentVideo == users[i][1])
                watchedTime += users[i][2].to_f
            end

            i += 1
        end

        if(mostWatchedVideoTime < watchedTime)
            mostWatchedVideoTime = watchedTime
            mostWatchedVideo = currentVideo
        end
    end

    mostWatchedVideoTime = RoundNumber(mostWatchedVideoTime)
    puts mostWatchedVideo.to_s + ',' + mostWatchedVideoTime.to_s
end

def GetMostWatchedVideoInTimes(users)
    mostWatchedVideo = 0
    mostWatchedTimes = 0

    users.each_with_index do |user, index|

        i = index + 1
        currentVideo = user[1]
        watchedTimes = 1
        while i < users.length
            if(currentVideo == users[i][1])
                watchedTimes += 1
            end

            i += 1
        end

        if(mostWatchedTimes < watchedTimes)
            mostWatchedTimes = watchedTimes
            mostWatchedVideo = currentVideo
        end
    end

    puts mostWatchedVideo.to_s + ',' + mostWatchedTimes.to_s
end

def GetMostActiveUser(users)
    mostWatchedVideoTime = 0
    mostActiveUser = 0

    users.each_with_index do |user, index|

        i = index + 1
        currentUser = user[0]
        watchedTime = user[2].to_f
        while i < users.length
            if(currentUser == users[i][0])
                watchedTime += users[i][2].to_f
            end

            i += 1
        end

        if(mostWatchedVideoTime < watchedTime)
            mostWatchedVideoTime = watchedTime
            mostActiveUser = currentUser
        end
    end

    mostWatchedVideoTime = RoundNumber(mostWatchedVideoTime)
    puts mostActiveUser.to_s + ',' + mostWatchedVideoTime.to_s
end

def GetMostActiveUserByWatchedTimes(users)
    mostWatchedTimes = 0
    mostActiveUser = 0

    users.each_with_index do |user, index|

        i = index + 1
        currentUser = user[0]
        watchedTimes = 1
        while i < users.length
            if(currentUser == users[i][0])
                watchedTimes += 1
            end

            i += 1
        end

        if(mostWatchedTimes < watchedTimes)
            mostWatchedTimes = watchedTimes
            mostActiveUser = currentUser
        end
    end

    puts mostActiveUser.to_s + ',' + mostWatchedTimes.to_s
end

pathToFile = ARGV[0]
taskToDo = ARGV[1].to_i

users = CSV.read(pathToFile)

if (taskToDo == 1)
    GetMostWatchedVideo(users)
elsif (taskToDo == 2)
    GetMostWatchedVideoInTimes(users)
elsif (taskToDo == 3)
    GetMostActiveUser(users)
elsif (taskToDo == 4)
    GetMostActiveUserByWatchedTimes(users)
else
    puts 'Invalid Command'
end
