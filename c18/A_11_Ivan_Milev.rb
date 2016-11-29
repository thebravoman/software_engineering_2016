require 'byebug'
password_length = ARGV[0].to_i
result_str = ''

# puts(('b'.ord - 1).chr)
def generate_passwords(password_length)
  File.open("passwords.txt", "w+") do |f1|
    (0..(26 ** password_length - 1)).each do |n|
      result_str = ''
      while(n > 1)
        result_str << ('a'.ord + (n % 26)).chr
        n /= 26
      end
      while result_str.length < password_length
        result_str << 'a'
      end
      if result_str.size ==4
        byebug
      end
      result_str.reverse!
      f1.write(result_str + '\n')
      # if(start + 1) % 1000 == 0
      # f1.close
        # start
      # end
    end
  end
end

# start = 0
# while(start < 26**(@@password_length - 1))
generate_passwords(password_length)
# end
