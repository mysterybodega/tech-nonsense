require "yaml"

class TechNonsense::Config
  YAML.mapping(
    total: Int64,
    adjectives: Array(String),
    nouns: Array(String),
    verbs: Array(String)
  )
end
