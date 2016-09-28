require 'csv'
ar = Array.new
video = Array.new
wed = Array.new
CSV.foreach("data.csv") do |row|
    row.map{ |x| x= x.to_f}
    i = 0
    ar[i] = row
    i += 1
end
ar.each do |l|
    i = 0
    video[ i ] = l[ 1 ]
    watched[ i ] = l[ 2 ]
    if(video[ i ] == video[ i + 1 ]) then
        wed[ i ] = wed[ i ] + wed[ i + 1 ]
        i += 1
    end
end
puts video
