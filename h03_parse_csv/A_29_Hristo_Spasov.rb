require 'csv'

file = ARGV[0]
task = ARGV[1].to_i

watched, viewed, watching_user, viewing_user = {}, {}, {}, {}
USER = 0; VIDEO = 1; WATCHED = 2

CSV.foreach(file) do |view|
    if task == 1 or task == 2
        unless watched.key?(view[VIDEO])
            watched.merge!(view[VIDEO] => view[WATCHED].to_f)
            viewed.merge!(view[VIDEO] => 1)
        else
            watched[view[VIDEO]] += view[WATCHED].to_f
            viewed[view[VIDEO]] += 1
        end
    elsif task == 3 or task == 4
        unless watching_user.key?(view[USER])
            watching_user.merge!(view[USER] => view[WATCHED].to_f)
            viewing_user.merge!(view[USER] => 1) 
        else
            watching_user[view[USER]] += view[WATCHED].to_f
            viewing_user[view[USER]] += 1
        end
    end
end

case task
when 1
    result = watched.select {|video, percentage| percentage == watched.values.max }
    puts "#{result.keys.pop},#{sprintf("%.2f", result.values.pop)}"
when 2
    result = viewed.select {|video, views| views == viewed.values.max }
    puts "#{result.keys.pop},#{result.values.pop}"
when 3
    result = watching_user.select {|user, percentage| percentage == watching_user.values.max }
    puts "#{result.keys.pop},#{sprintf("%.2f", result.values.pop)}"
when 4
    result = viewing_user.select {|user, views| views == viewing_user.values.max }
    puts "#{result.keys.pop},#{result.values.pop}"
end

