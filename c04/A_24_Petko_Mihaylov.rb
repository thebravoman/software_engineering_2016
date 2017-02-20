require 'csv'
a=ARGV[0].to_s
e=ARGV[1].to_i


CSV.foreach(a) do |r|
 if e==1
 	b=r[1].to_i
 	
 end
 if e==2
 
 
 end
 if	e==3
 
 
 end
 if	e==4
 
 
 end
 if e==5
 
 
 end
 
 b=r[0].to_i
 c=r[1].to_i
 d=r[2].to_f
	print( "\n#{b} #{c} #{d}")
end
