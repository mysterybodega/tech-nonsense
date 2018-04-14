require "./tech-nonsense/*"

include TechNonsense::Utils

config_file = ARGV.first rescue error("Missing config argument.")
config_text = File.read(config_file) rescue error("Config does not exist: #{config_file}.")

config = TechNonsense::Config.from_yaml(config_text)
chain = TechNonsense::Chain.new(
  adjectives: config.adjectives,
  nouns: config.nouns,
  verbs: config.verbs
)

config.total.times { puts chain.next }
