# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'srtparser_library/version'

Gem::Specification.new do |spec|
  spec.name          = "srtparser_library"
  spec.version       = SRTParser::VERSION
  spec.authors       = ["Dimitar Nikolov"]
  spec.email         = ["dknikolov@gmail.com"]

  spec.summary       = %q{A useful tool for every subtitle creator (and coder)}
  spec.homepage      = "https://github.com/thebravoman/software_engineering_2016/tree/master/h10_srt_parse/A_07_Dimitar_Nikolov"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.13"
  spec.add_development_dependency "rake", "~> 13.0"
end
