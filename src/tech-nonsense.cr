require "colorize"
require "./tech-nonsense/*"

def error(message : String)
  puts(message.colorize.red)
  exit(1)
end

config_file =
  begin
    ARGV.first
  rescue
    error("Missing config file argument.")
  end
config_text =
  begin
    File.read(config_file)
  rescue
    error("Config file does not exist: #{config_file}.")
  end

config = TechNonsense::Config.from_yaml(config_text)
chain = TechNonsense::Chain.new(
  adjectives: config.adjectives,
  nouns: config.nouns,
  verbs: config.verbs
)

config.total.times { puts chain.next }
