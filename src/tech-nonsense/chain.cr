require "markov"
require "yaml"

class TechNonsense::Chain
  @chain : Markov::Chain(String)

  def initialize(
    @adjectives : Array(String),
    @nouns : Array(String),
    @verbs : Array(String)
  )
    sample = 100_000.times.flat_map { sentence }.to_a
    @chain = Markov::Chain(String).new(sample: sample, seed: sample.first)
  end

  def next
    words = [] of String
    loop do
      word = @chain.next
      words << word
      break if word.ends_with?(".")
    end
    words.size > 2 ? words.join(" ").rchop(".") : self.next
  end

  private def sentence
    case rand(2)
    when 0
      [verb, adjective, noun + "."]
    else
      [adjective, noun + "."]
    end
  end

  private def verb
    @verbs.sample
  end

  private def adjective
    @adjectives.sample
  end

  private def noun
    @nouns.sample
  end
end
