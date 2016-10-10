require 'json'
JSON.parse(File.read(ARGV[0])) == JSON.parse(File.read(ARGV[1])) ?
    puts(1) : puts(0)

