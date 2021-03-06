# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'environment_flag/version'

Gem::Specification.new do |spec|
  spec.name          = "environment_flag"
  spec.version       = EnvironmentFlag::VERSION
  spec.authors       = ["Luke Niedermyer"]
  spec.email         = ["luke@westarete.com"]

  spec.summary       = %q{Adds a visual flag to indicate the current Rails environment.}
  spec.description   = %q{Always know what environment you are looking at in the browser. This places a colored-coded and labeled flag on the screen that indicates the current Rails environment.}
  spec.homepage      = "https://github.com/westarete/environment_flag"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
