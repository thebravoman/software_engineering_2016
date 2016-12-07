
require "csv" 
task=ARGV[1].to_i 
best_vid=0 
max_sum=0 
cur_num=0 
sum=0 
cur_video=0 

afile=CSV.read(ARGV[0]) 
if task==1 
i=0 

    afile.each do|row|           
    sum=sum+afile[i][2].to_f  
     
    cur_num=afile[i][0].to_i 
    cur_video=afile[i][1].to_i 
    
    j=0 
        afile.each do|row| 
        if afile[j][0].to_i!=cur_num && cur_video==afile[j][1].to_i 
        sum=sum+afile[j][2].to_f 
        end 
        j=j+1 
        end 
    i=i+1 
     
    if(max_sum<sum) 
    max_sum=sum 
    best_vid=cur_video  
    end
    sum=0 
        
    end 
if(max_sum%1!=0)
puts "#{best_vid.to_i},#{ max_sum.to_f.round(2) }"
else
puts "#{best_vid.to_i},#{ max_sum.to_i }"
end
end 
if task==2
i=0
 	afile.each do|row|
                 sum=sum+1
		
               cur_num=afile[i][0].to_i 
               cur_video=afile[i][1].to_i
             j=0
              afile.each do|row|
                	if afile[j][0].to_i!=cur_num && cur_video==afile[j][1].to_i 
                              sum=sum+1   
                 	end
                       j=j+1
 	      end
                       i=i+1
                      if(max_sum<sum) 
    		      max_sum=sum 
                      best_vid=cur_video  
                      end
              
              sum=0 
	end
puts "#{best_vid.to_i},#{ max_sum.to_i }"
end
if task==3
i=0 

    afile.each do|row|           
     sum=sum+afile[i][2].to_f       
     cur_num=afile[i][1].to_i 
     cur_video=afile[i][0].to_i     
     j=0 
        afile.each do|row| 
        	if afile[j][1].to_i!=cur_num && cur_video==afile[j][0].to_i 
        	sum=sum+afile[j][2].to_f 
        	end 
        	j=j+1 
        end 
      i=i+1  
    	if(max_sum<sum) 
    		max_sum=sum 
    		best_vid=cur_video  
    	end
       sum=0    
    end 


if(max_sum%1!=0)
puts "#{best_vid.to_i},#{ max_sum.to_f.round(2) }"
else
puts "#{best_vid.to_i},#{ max_sum.to_i }"
end
end
if task==4
i=0
 	afile.each do|row|
                 sum=sum+1
		
               cur_num=afile[i][1].to_i 
               cur_video=afile[i][0].to_i
             j=0
              afile.each do|row|
                	if afile[j][1].to_i!=cur_num && cur_video==afile[j][0].to_i 
                              sum=sum+1   
                 	end
                       j=j+1
 	      end
                       i=i+1
                      if(max_sum<sum) 
    		      max_sum=sum 
                      best_vid=cur_video  
                      end
              
              sum=0 
	end

puts "#{best_vid.to_i},#{ max_sum.to_i }"
end

