require 'csv'
data_path, output_cmd, full_data_info = ARGV[0], ARGV[1].to_i, Array.new(5) {Hash.new(0.0)}
CSV.foreach(data_path) do |row|  
  full_data_info[output_cmd][row[ output_cmd == 1 || output_cmd == 2 ? 1 : 0 ].to_i]+= output_cmd == 1 || output_cmd == 3 ? row[2].to_f : output_cmd == 4 ? 1 : output_cmd == 2 ? 1 : 0  
end
puts String(full_data_info[output_cmd].max_by{|k,v| v}[0].to_i) << ',' << String(output_cmd == 1 ? full_data_info[output_cmd].max_by{|k,v| v}[1].round(2) : output_cmd == 2 || output_cmd == 4 ? full_data_info[output_cmd].max_by{|k,v| v}[1].to_i : full_data_info[output_cmd].max_by{|k,v| v}[1])
