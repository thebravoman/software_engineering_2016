require 'csv'

# path = ARGV[0].to_s
elm = ARGV[0].to_i

data_arr = CSV.read("input.csv");

def find_max_elm(search_elm, data_arr)
  max = 0
  max_row = Array;
  data_arr.each do |row|
    if max.to_i < row[search_elm].to_i
      max = row[search_elm]
      max_row = row
    end
  end
  return max_row;
end

def max_viewed(data_arr)
  most_views = Hash.new();
  data_arr.each do |row|
    # p most_views[row[1]]
    if most_views[row[1]] == nil
      # puts "hey"
      most_views[row[1]] = row[2]
    else
      most_views[row[1]] = most_views[row[1]]+row[2]
    end
    # puts[most_views]
  end
end

puts "#{find_max_elm(elm, data_arr)}";
max_viewed(data_arr);
