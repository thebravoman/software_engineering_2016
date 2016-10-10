require 'csv'
require 'json'
a=ARGV[0].to_s
$e=ARGV[1].to_i


def most_common_value(b)
  b.group_by do |e|
    e
  end.values.max_by(&:size).first
end


u = []
CSV.foreach(a) {|row1| u << row1[0]}

v = []
CSV.foreach(a) {|row2| v<< row2[1]}

p = []
CSV.foreach(a) {|row3| p << row3[2]}

q=most_common_value(u).to_i
r=most_common_value(v).to_i

size=u.length.to_i


 case $e
 when 1
	 pv =Array.new(9999,0)
	for i in 0..size
		pv[v[i].to_i]=pv[v[i].to_i]+p[i].to_f;
	end
	max=pv[0].to_f
	j=0
	for i in 0..9999
		if max < pv[i].to_f
			j=i
			max=pv[i].to_f
		end
	end
	my_hash = JSON.parse('{"v" : "j"}')
	puts my_hash ["v"] => "j"
	#puts "#{j},#{max.round(2)}" puts {:"video_id" => "#{j}": "perc" => "#{max.round(2)}"}.to_json
 when 2
	j=0
	for i in 0..size
		if r == v[i].to_i
			j=j+1
		end

	end
	puts "#{r},#{j}"
 when 3

		pu =Array.new(9999,0)
	for i in 0..size
		pu[u[i].to_i]=pu[u[i].to_i]+p[i].to_f;
	end
	max=pu[0].to_f
	j=0
	for i in 0..9999
		if max < pu[i].to_f
			j=i
			max=pu[i].to_f
		end
	end
	h=
	puts "#{j},#{max.round(2)}"
 when 4
	j=0
	for i in 0..9999
		if q == u[i].to_i
			j=j+1
		end

	end
	puts "#{q},#{j}"
end
