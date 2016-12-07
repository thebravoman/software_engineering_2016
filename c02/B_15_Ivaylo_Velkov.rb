#!/usr/bin/env ruby

puts Dir.glob(File.join("/home/elsyser/Desktop/11B/software_engineering_2016/c01_introduction", '**', '*.txt')).select { |file| File.file?(file) }.count

str = Dir.entries("/home/elsyser/Desktop/11B/software_engineering_2016/c01_introduction")

puts str.join.gsub(".txt","").gsub('_',',')


