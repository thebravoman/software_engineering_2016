require'csv'

File.open('/home/Desktop/data.scv','r') do|file|
data=CSV.read('data.scv')




CSV.foreach('data.scv',converters: :numeric)
