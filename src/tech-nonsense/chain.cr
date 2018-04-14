require "markov"
require "yaml"

class TechNonsense::Chain
  @corpus : Array(String)
  @chain : Markov::Chain(String)

  def initialize(
    @adjectives : Array(String),
    @nouns : Array(String),
    @verbs : Array(String)
  )
    @corpus = 100_000.times.flat_map do
      compose.split(" ")
    end.to_a
    @chain = Markov::Chain(String).new(
      sample: @corpus,
      seed: @corpus.sample
    )
    @chain.on_dead_end { @corpus.sample }
  end

  def next
    words = [] of String
    loop do
      word = @chain.next
      words << word
      break if word.ends_with?(".")
    end
    words.size > 2 ? words.join(" ").sub(".", "") : self.next
  end

  private def compose
    words =
      case rand(2)
      when 0
        [verb, adjective, noun]
      else
        [adjective, noun]
      end
    words.join(" ") + "."
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
