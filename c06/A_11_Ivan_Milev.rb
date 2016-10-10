require 'csv'
require 'json'

path = ARGV[0]
mode = ARGV[1].to_i

$data_arr = CSV.read(path);

def max_sum_finder(srch_col)
  most_views = Hash.new()
  $data_arr.each do |row|
    if most_views[row[srch_col]] == nil
      most_views[row[srch_col]] = 1
    else
      most_views[row[srch_col]] += 1
    end
  end
  return most_views.max_by{|k, v| v}
end

def most_finder(col, srch_col)
  most_watched = Hash.new()
  $data_arr.each do |row|
    if most_watched[row[col]] == nil
      most_watched[row[col]] = row[srch_col].to_f
    else
      most_watched[row[col]] = most_watched[row[col]].to_f + row[srch_col].to_f
    end
  end
  return most_watched.max_by{|k, v| v}
end

def mod_definer(mode)
  case mode
  when 1
    col = 1
    srch_col = 2
    return most_finder(col, srch_col)
  when 2
    srch_col = 1
    return max_sum_finder(srch_col)
  when 3
    col = 0
    srch_col = 2
    return most_finder(col, srch_col)
  when 4
    srch_col = 0
    return max_sum_finder(srch_col)
  else
    abort();
  end
end

result = mod_definer(mode)
h = Hash[*result]
h[h.keys.first] = h[h.keys.first].round(2)
puts h.to_json
# puts "#{result[0]},#{result[1].round(2)}" if result[1].kind_of?(Float) && result[1] % 1 != 0
# puts "#{result[0]},#{result[1].to_i}" if result[1].kind_of?(Integer) || result[1] % 1 == 0
