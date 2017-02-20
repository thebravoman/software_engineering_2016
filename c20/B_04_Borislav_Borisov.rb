
def generate_code(length=26)
  charset = Array('A'..'Z')
  Array.new(length) { charset.sample }.join
end
 
puts generate_code(20)
