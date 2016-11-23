
num1 = num2 = num3 = num4 = num5 = num6 = 'a'
open('passwords.txt', 'w') do |f|
 
	while num1 <= 'z'
		if num6 == 'z'
			num6 = 'a'
			break;
		while num2 <= 'z'
			if num6 == 'z'
			num6 = 'a'
			break;
			while num3 <= 'z'
				if num6 == 'z'
					num6 = 'a'
					break;
				while num4 <= 'z'
					if num6 == 'z'
						num6 = 'a'
						break;
					while num5 <= 'z'
						if num6 == 'z'
							num6 = 'a'
							break;
						while num6 <= 'z'		
							f.puts num1.to_s
							f.puts num2.to_s
							f.puts num3.to_s
							f.puts num4.to_s
							f.puts num5.to_s
							f.puts num6.to_s
							f.puts "/n"
							num6++;
							if num6 == 'z'
								num6 = 'a'
								break;
						end
						num5++;
					end
					num4++;
				end
				num3++;
			end
			num2++;
		end
		num1++;
	end
end
