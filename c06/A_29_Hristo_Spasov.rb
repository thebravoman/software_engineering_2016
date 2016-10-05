require 'csv'
require 'json'

file = ARGV[0]
$task = ARGV[1].to_i

data = {}

$task < 3 ?
    KEY = 1 : KEY = 0

VALUE = 2

def print_statsmax(key, value)
    case $task
    when 1
        puts JSON.generate({ :video_id => key, :perc => value.round(2) })
    when 2
        puts JSON.generate({ :video_id => key, :times => value })
    when 3
        if value % 1 == 0
        	puts JSON.generate({ :user_id => key, :perc => value.to_i })
        else
        	puts JSON.generate({ :user_id => key, :perc => value.round(2) })
        end
    when 4
        if value % 1 == 0
        	puts JSON.generate({ :user_id => key, :times => value.to_i })
        else
        	puts JSON.generate({ :user_id => key, :times => value.round(2) })
        end
    end
end

def list_statsmax(all_data)
    result = all_data.select {|key, value| value == all_data.values.max }
    result.each do |key, value|
        print_statsmax(key, value)
    end
end

CSV.foreach(file) do |view|
    unless data.key?(view[KEY])
        $task % 2 == 1 ?
            data.merge!(view[KEY] => view[VALUE].to_f) : data.merge!(view[KEY] => 1)
    else
        $task % 2 == 1 ?
            data[view[KEY]] += view[VALUE].to_f : data[view[KEY]] += 1
    end
end

list_statsmax(data)
