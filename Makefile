# Makefile for Portfolio Project

SRC = src/index.jsx
OUT = build/bundle.js
BROWSERIFY = ./node_modules/.bin/browserify
WATCHIFY = ./node_modules/.bin/watchify

# CSS Source Files
CSS_BASE = src/styles/base.css
CSS_TERMINAL = src/styles/terminal.css
CSS_VISUAL = src/styles/visual.css
CSS_COMPONENTS = src/styles/components.css
CSS_ANIMATIONS = src/styles/animations.css
CSS_OUT = public/styles.css

.PHONY: all clean dev build css

all: build

# Concatenate all CSS modules into one file
css:
	@echo "Building modular CSS..."
	cat $(CSS_BASE) $(CSS_TERMINAL) $(CSS_VISUAL) $(CSS_COMPONENTS) $(CSS_ANIMATIONS) > $(CSS_OUT)
	@echo "✓ CSS built successfully"

# Production build
build: css
	@echo "Building JavaScript bundle..."
	mkdir -p build
	$(BROWSERIFY) $(SRC) \
	  -t [ babelify --extensions .jsx ] \
	  -o $(OUT)
	@echo "✓ Build complete"

# Development mode with watch
dev: css
	@echo "Starting development mode..."
	mkdir -p build
	$(WATCHIFY) $(SRC) \
	  -t [ babelify --extensions .jsx ] \
	  -o $(OUT) \
	  -d -v

clean:
	rm -rf build/*
	rm -f $(CSS_OUT)

