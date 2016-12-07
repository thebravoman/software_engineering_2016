require 'csv'

#instr = ARVG[0]
#if instr < 1 && instr > 5
  

input_arr = nil
CSV.foreach("/home/boyan//TP/28.09/clip_view.csv") do |row|
  input_arr = CSV.read("/home/boyan//TP/28.09/clip_view.csv")
end

percent_most_watched = nil
watched_value = nil
i = 0

for i in input_arr.lengt 
    percent_most_watched[i][] = 
  
