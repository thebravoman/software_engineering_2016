require 'csv'

H_ = Hash.new(0.0)
C3_sum = 0;
CSV.foreach(ARGV[0]) do |row|
    if !row[1].match(/\d+/) && row[0].to_i > 17
        c3sum = c3sum + row[2].to_i
    end
end
puts C3sum 
