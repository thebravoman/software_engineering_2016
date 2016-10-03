#		  ╭╮  ╭┳━━━┳━━━╮
#		  ┃╰╮╭╯┃╭━╮┃╭━╮┃
#		  ╰╮╰╯╭┫╰━━┫┃ ╰╯
#     		   ╰╮╭╯╰━━╮┃┃╭━╮
#      		    ┃┃ ┃╰━╯┃╰┻━┃
#      		    ╰╯ ╰━━━┻━━━╯

#https://www.youtube.com/watch?v=xk_VN_bP3Yg
#https://www.youtube.com/watch?v=jC59xNO8wgA
#https://www.youtube.com/watch?v=_SY1lXBchLQ
#https://www.youtube.com/watch?v=V3v_ruXsapI
#https://www.youtube.com/watch?v=bE_8KQuzDVg
#https://www.youtube.com/watch?v=DrZVoEfixB4
#https://www.youtube.com/watch?v=SuWoLGrjzzY
#https://www.youtube.com/watch?v=aee6lahLwdU
#https://www.youtube.com/watch?v=8e8ZzF7ukHQ
#https://www.youtube.com/watch?v=Y1xjBinHCuU
#https://www.youtube.com/watch?v=GujNOIi2VIQ
#https://www.youtube.com/watch?v=pkR_wWTfrHQ
#https://www.youtube.com/watch?v=43E8UB7nk3Y
#https://www.youtube.com/watch?v=u04Dn2lsLzE
#https://www.youtube.com/watch?v=C7CFIeti7ac 
#https://www.youtube.com/watch?v=f5MiTKseS_c
#https://www.youtube.com/watch?v=mVL9OOM7FFo
#https://www.youtube.com/watch?v=lXTRcy18e5I

require 'csv'

filename = ARGV[0].to_s
function = ARGV[1].to_i
ysg = Hash.new

ysgboyz = CSV.open(ARGV[0].to_s)

CSV.foreach(filename) do |row|
	case function 
		when 1 
			ysg[row[1]] = (ysg[row[1]]).to_f + row[2].to_f
		when 2
			ysg[row[1]] = 1 + ysg[row[1]].to_i
		when 3
			ysg[row[0]] = (ysg[row[0]]).to_f + row[2].to_f
		when 4
			ysg[row[0]] = 1 + ysg[row[0]].to_i
	end
end

if function % 2
	printf("%s,%.2f\n", ysg.key(ysg.values.max), ysg.values.max)
else
	printf("%s,%d\n", ysg.key(ysh.values.max), ysg.values.max)
end
