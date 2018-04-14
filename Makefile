NAME = tech-nonsense
BUILD_FLAGS = -s -p --error-trace

build: clean setup
	@crystal build src/$(NAME).cr -o bin/$(NAME) $(BUILD_FLAGS)
	@echo

setup:
	@shards check || shards install
	@mkdir -p bin

clean:
	@rm -rf bin

.PHONY: build setup clean
