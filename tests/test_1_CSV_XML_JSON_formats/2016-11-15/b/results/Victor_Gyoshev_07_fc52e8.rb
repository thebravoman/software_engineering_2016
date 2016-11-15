require 'csv'
hash_ = Hash.new(0.0)
c3sum = 0;
CSV.foreach(ARGV[0]) do |red|
    if !red[1].match(/\d+/) && red[0].to_i > 17
        c3sum += red[2].to_i
    end
end
puts c3sum;
