# ruby run_scripts_agains_fixtures.rb "folder for the class" "folder with fixtures"
require 'csv'
require 'open3'
require 'byebug'

def find_expected_and_task script_file, fixture_to_result
	expects_path = ARGV[0]+"expects/"
	tasks_path = ARGV[0]+"tests/"
	begin
		hex = script_file.split("/").last.split('_')[3].split('.')[0]
		number = script_file.split("/").last.split('_')[2]
		p "Script file is"
		p script_file
		p "Hex is"
		p hex
		if hex != nil
			p tasks_path+number+"_"+hex+".txt"
			fixture_to_result[:expected] = File.read(expects_path+hex+".csv")
			fixture_to_result[:task] = File.read(tasks_path+number.to_i.to_s+"_"+hex+".txt")
		end	
		true
	rescue Exception=>ex
		p ex.to_s
		fixture_to_result[:expected] = "#{ex}. Can not be determined since the hex is #{hex}. Check file name format"
		fixture_to_result[:task] = "#{ex}. Can not be determined because of hex #{hex} and number #{number}"
		false
	end
end

results = Hash.new
count =0
results_path =ARGV[0]+"results/*.rb"
Dir.glob(results_path).each do |script_file|
	p "++++++++++++++++++++++++++++++++++++++++++++++++++="
	results[script_file] = Hash.new
	csv_file =ARGV[1]+"fixture1/file.csv"
	json_file = ARGV[1]+"fixture1/file.json"
	xml_file = ARGV[1]+"fixture1/file.xml"

	fixture_to_result = results[script_file]
	if find_expected_and_task script_file, fixture_to_result
		p "Expected content is"
		p fixture_to_result[:expected]	

		stdin, stdout, stderr = Open3.popen3("ruby #{script_file} #{csv_file} #{json_file} ")
		program_error = stderr.readlines.inject(:+)
		begin 
			fixture_to_result[:output] = stdout.readlines.inject(:+).gsub(/\s/,"")
		rescue Exception=>ex
			p ex
			fixture_to_result[:output] = "#{ex}. No output to stdout from the program."
			fixture_to_result[:program_error] = program_error
		end 
		p "output is"
		p fixture_to_result[:output]
	
		if (fixture_to_result[:output] <=> fixture_to_result[:expected]) == 0
			fixture_to_result[:result] = 1
		else
			fixture_to_result[:result] = 0
		end
		p "---------------------------------------------------"
	end
end


results = results.sort_by {|k, v| k.split('/').last.split('_')[2].to_i}.to_h

CSV.open("official_results.csv", "w") do |csv|
	csv << ["Name","Result","Program error","Task","Expected","Output csv"]
	results.each_key do |key|
		ftr = results[key]
		csv << [key,ftr[:result],ftr[:program_error],ftr[:task],ftr[:expected],ftr[:output]]
	end
end