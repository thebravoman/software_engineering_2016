require 'csv'
geri = Array.new(15)
geri.map! { |g| g = 0.000; }
viki = Array.new(15)
viki.map! { |g| g = 0; }
CSV.foreach("result.csv") do |csv_row|
csv_row.map! { |x| x = x.to_f }
geri [csv_row[1]] += csv_row[2]
viki [csv_row[1]] += if csv_row[2] == 0 then 0 else 1 end
end
puts geri.rindex(geri.max)
puts viki.rindex(viki.max)
