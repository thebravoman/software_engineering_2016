require "csv"
file = ARGV[0]
task = ARGV[1].to_i
arr=CSV.read(file)
hash=Hash.new
if(task>0 && task<5)
		if task==1
			temp=1
			arr.each do |row|
				if hash.key?(row[temp])
					hash[row[temp]] += row[2].to_f			
				else
					hash[row[temp]]	= row[2].to_f
				end
			end
		elsif task==2
			temp=1
			arr.each do |row|
				if hash.key?(row[temp])
					hash[row[temp]]+=1
				else 
					hash[row[temp]]=1
				end		
			end
		elsif task==3
			temp=0
			arr.each do |row|
				if hash.key?(row[temp])
					hash[row[temp]] += row[2].to_f
				else
					hash[row[temp]]	= row[2].to_f
				end
			end		
		else
			temp=0
			arr.each do |row|
				if hash.key?(row[temp])
					hash[row[temp]]+=1
				else 
					hash[row[temp]]=1
				end	
			end	
		end		
		largest=hash.values.max
		k=hash.select{|k,v| v == largest}.keys
		if(task==1)
			k.each do |row|
				a=row
				b=hash[row].to_f
				print a
				print ","
				puts format("%.2f",b)
			end
		elsif(task==2)
			k.each do |row|
				a=row
				b=hash[row].to_i
				print a
				print ","
				puts  b
			end
		elsif(task==3)
			k.each do |row|
				a=row
				b=hash[row].to_f
				print a
				print ","
				puts format("%.2f",b)
			end
		elsif(task==4)
			k.each do |row|
				a=row
				b=hash[row].to_i
				print a
				print ","
				puts b
			end
		end
	end
