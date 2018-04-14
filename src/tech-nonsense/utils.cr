require "colorize"

module TechNonsense::Utils
  def error(message : String)
    puts(message.colorize.red)
    exit(1)
  end
end
