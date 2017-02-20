require"json"
require"csv"
h1=Hash.new

i=0
sum=0

file2=CSV.read(ARGV[0])
file1=File.read(ARGV[1])
h1=JSON.parse(file1)


file2.each do |row|
wanted=file2[i][1].to_i
h1.each{|key,value|
if(!(h1.has_key?(wanted)))
sum+=value.to_i
end
}
i+=1
end

puts sum

    


