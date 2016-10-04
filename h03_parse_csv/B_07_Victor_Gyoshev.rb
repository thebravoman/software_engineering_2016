require 'csv'
hash_,tip = Hash.new(0.0),ARGV[1].to_i
CSV.foreach(ARGV[0]) do |red|
	case tip
		when 1 then hash_[red[1]]+= red[2].to_f
		when 2 then hash_[red[1]]+= red[2] == 0 ? 0 : 1 
		when 3 then hash_[red[0]]+= red[2].to_f
		when 4 then hash_[red[0]]+= red[2] == 0 ? 0 : 1
	end
end
printf tip % 2 == 0 ? "%i,%i\n":"%i,%.2f\n", *hash_.max_by{|k,v| v}
