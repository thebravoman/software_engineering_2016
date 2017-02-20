require 'optparse'
require 'json'
require 'pathname'

options= {}
OptionParser.new do |opts|
  opts.banner = "Usage: check.rb FOLDER_WITH_HOMEWORKS\n "
  opts.banner += "Recursively finds all the students txt documents and checks the homeworkd"
  opts.on('-v', '--verbose', 'verbose') { |v| options[:v] = v }
end.parse!

class CheckHomeworks

	attr_accessor :options
	attr_accessor :folder
	attr_accessor :file_results

	def initialize folder, options
		self.folder = folder
		self.options = options
		self.file_results = {}
	end

	def run
		Dir.glob(self.folder + "/**/*_*_*_*.txt") do |file|
			if File.file?(file) 
				content = File.read(file).gsub(/\s+/, "")
				puts if options[:v]
				puts "Checking file is: #{file}" if options[:v]
				puts "file content is: #{content}" if options[:v]
				user = Random.rand(10)
				curl_get ="curl #{content}/visits?user=#{user}"	
				curl_post ="curl -X POST --data \"user=#{user}\" #{content}/visits/"
				puts "curl_get is #{curl_get}" if options[:v]
				puts "curl_post is #{curl_post}" if options[:v]

				wake_up_instance curl_get
				make_sure_user_exists curl_post
				old_count = get_user_count curl_get
				puts "old count is: #{old_count}" if options[:v]
				num_posts = Random.rand(2)+2
				puts "sending #{num_posts} POST requests" if options[:v]
				1.upto(num_posts).each do |n|
					make_a_post curl_post
				end
				new_count = get_user_count curl_get
				puts "new user count is: #{new_count}" if options[:v]
				save_for_user file, new_count, old_count, num_posts
			end
		end
	end

	private
	def save_for_user file, new_count, old_count, num_posts
		file_results[Pathname.new(file).basename] = 
		if new_count == nil
			nil
		elsif old_count == nil
			nil
		else
			new_count-old_count-num_posts
		end
		puts "Saved for file #{file} is result: #{file_results[Pathname.new(file).basename]}" if options[:v]
	end

	def wake_up_instance curl_get
		puts "Waking up instace" if options[:v]
		`#{curl_get}`
	end

	def make_sure_user_exists curl_post
		`#{curl_post}`
	end

	def get_user_count curl_get
		result = `#{curl_get}`
		puts "get result is: #{result}" if options[:v]
		begin
    	JSON.parse(result)["count"]
  	rescue JSON::ParserError => e
    	return nil	
  	end
	end

	def make_a_post curl_post
		puts "sending post" if options[:v]
		result = `#{curl_post}`
		puts "Result from post is: #{result}" if options[:v]
	end

end

checker = CheckHomeworks.new(ARGV[0],options)
checker.run
checker.file_results.each do |key,saved_value|
	test_result = saved_value==0? 1 : 0
	puts "#{key},#{test_result}"
end
