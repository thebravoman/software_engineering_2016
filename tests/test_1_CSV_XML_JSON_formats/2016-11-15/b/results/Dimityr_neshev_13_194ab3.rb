require 'csv'

	csv=ARGV[0]
	data=Hash.new(0)
	num=17.to_i;
CSV.foreach(csv) do |row|

	if row[0].to_i> num &&row[1]=='tues'
		data[row[2]]+=row[2].to_i
	end
	

end

