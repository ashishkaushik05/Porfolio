# 🖥️ Terminal Portfolio

A unique dual-interface personal portfolio with **Terminal Mode** and **Visual Mode**. Built with React, Browserify, and modular CSS architecture.

---

## ✨ Features

### 🖥️ Terminal Mode
- **Authentic shell experience** with command execution
- **Tab autocomplete** for commands and files
- **Command history** navigation (↑/↓ arrows)
- **Bottom-up display** like real terminals
- **Modal popups** for viewing sections
- **Mac-style window controls**

### 🎨 Visual Mode
- **Single-page tab navigation** with smooth transitions
- **Modern glassmorphism** design
- **Responsive layout** for all screen sizes
- **Professional contact form**
- **Project showcase** with tech tags
- **Timeline experience** section

### ⚡ Technical Highlights
- **Modular CSS** - 5 focused modules instead of one 1800-line file
- **React 19** with automatic JSX runtime
- **Browserify + Babel** build pipeline
- **Makefile automation** for builds
- **Zero frameworks** - just React and vanilla CSS

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Make (usually pre-installed on macOS/Linux)

### Installation

```bash
# Clone the repository
git clone <https://github.com/ashishkaushik05/Porfolio.git>
cd portfolio

# Install dependencies  
npm install

# Build the project
make build

# Open in browser
open public/index.html
# or use a local server:
python3 -m http.server 5500
# then visit: http://localhost:5500/public/
```

### Development Mode

```bash
# Watch mode - auto-rebuilds on file changes
make dev

# In another terminal, serve the files
npx live-server public/
```

---

## 📁 Project Structure

```
Porfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── VisualLayout.jsx
│   ├── terminal/            # Terminal-specific components
│   │   ├── Terminal.jsx
│   │   └── TerminalInput.jsx
│   ├── ui/                  # Reusable UI components
│   │   ├── Modal.jsx
│   │   └── Button.jsx
│   ├── styles/              # Modular CSS (NEW!)
│   │   ├── base.css         # Variables, resets, buttons
│   │   ├── terminal.css     # Terminal & modal styles
│   │   ├── visual.css       # Visual mode layout
│   │   ├── components.css   # Section styles
│   │   └── animations.css   # Keyframe animations
│   ├── App.jsx              # Mode switcher
│   ├── index.jsx            # React entry point
│   ├── Commands.js          # Terminal command handlers
│   ├── TerminalParser.js    # Command parser
│   └── styles.css           # Documentation (now 116 lines!)
├── public/
│   ├── index.html           # HTML entry point
│   └── styles.css           # Auto-generated from modules
├── build/
│   └── bundle.js            # Compiled JavaScript
├── Makefile                 # Build automation
├── .babelrc                 # Babel configuration
├── .gitignore              # Git ignore rules
├── package.json             # Dependencies
└── README.md                # This file
```

---

## 🎨 Modular CSS Architecture

**Before:** 1 monolithic file (1,791 lines) 😰  
**After:** 5 focused modules + documentation (116 lines main file) ✨

### Module Breakdown

| Module | Lines | Purpose |
|--------|-------|---------|
| `base.css` | 256 | Variables, resets, buttons, landing page |
| `terminal.css` | 367 | Terminal UI, modals, autocomplete |
| `visual.css` | 426 | Visual mode layout, tabs, navigation |
| `components.css` | 483 | Section styles, grids, cards, forms |
| `animations.css` | 73 | All keyframe animations |
| **Total** | **1,605** | Modular, maintainable, organized |

### Benefits
- ✅ **Easy to find** - Terminal styles in `terminal.css`
- ✅ **Better git diffs** - Changes isolated to relevant files
- ✅ **Faster debugging** - Smaller files, clearer structure
- ✅ **Team-friendly** - Multiple devs can work on different modules
- ✅ **95% reduction** - Main file now just documentation

### Build Process

```bash
make css  # Concatenates all modules → public/styles.css
make build  # Builds CSS + JavaScript bundle
```

---

## 🛠️ Available Commands (Makefile)

```bash
make build    # Production build (CSS + JS)
make css      # Build CSS only
make dev      # Development mode with watchify
make clean    # Remove build artifacts
```

---

## 💻 Terminal Commands

Once in Terminal Mode, try these commands:

### File Execution
```bash
./about       # Open About section
./projects    # Open Projects section
./skills      # Open Skills section
./experience  # Open Experience section
./contact     # Open Contact section
```

### System Commands
```bash
help          # Show all available commands
ls            # List available files
pwd           # Print working directory
whoami        # Display user info
date          # Show current date/time
clear         # Clear terminal screen
```

### Features
- **Tab autocomplete** - Type `./ab` + Tab → `./about`
- **Command history** - Use ↑/↓ to navigate previous commands
- **Click to focus** - Click anywhere in terminal to focus input
- **ESC to close** - Close modals with ESC key

---

## 🎯 Customization Guide

### Change Colors

Edit `src/styles/base.css`:

```css
:root {
  --accent-color: #00ff41;  /* Matrix green */
  --accent-alt: #ffa500;    /* Amber highlights */
  /* Change to your brand colors */
}
```

### Add New Terminal Command

1. **Edit** `src/Commands.js`:
```javascript
export const commands = {
  // ... existing commands
  mycommand: {
    description: 'My custom command',
    execute: (args) => {
      return 'Command output here';
    }
  }
};
```

2. **Rebuild**: `make build`

### Add New Section

1. **Create** `src/components/NewSection.jsx`
2. **Add to** component map in `src/terminal/Terminal.jsx`
3. **Add command** in `src/Commands.js`
4. **Add tab** in `src/components/VisualLayout.jsx`

---

## 📱 Responsive Design

- **Desktop**: Full terminal experience, all features enabled
- **Tablet**: Adaptive layout, touch-friendly controls
- **Mobile**: Simplified navigation, optimized for small screens

---

## 🚢 Deployment

### GitHub Pages

```bash
# Build production bundle
make build

# Push to gh-pages branch
git subtree push --prefix public origin gh-pages
```

### Netlify

1. Connect repository
2. Build command: `make build`
3. Publish directory: `public/`

### Vercel

```bash
vercel --prod
```

---

## 🧪 Testing

```bash
# Install dependencies
npm install

# Build project
make build

# Verify files exist
ls -l build/bundle.js
ls -l public/styles.css

# Test in browser
open public/index.html
```

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📝 TODO / Future Enhancements

- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Implement backend for contact form
- [ ] Add more terminal Easter eggs
- [ ] Create theme switcher (light/dark mode)
- [ ] Add syntax highlighting for code examples
- [ ] Implement command aliases
- [ ] Add terminal command suggestions
- [ ] Create deployment GitHub Action

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

## 🙏 Acknowledgments

- Inspired by classic Unix terminals
- Matrix green aesthetic
- Glassmorphism design trend
- Modern portfolio best practices

---

## 📧 Contact

**Ashish Kaushik**  
📧 Email: ashish._.kaushik@outlook.com  
🐙 GitHub: [@ashishkaushik05](https://github.com/ashishkaushik05)  
� Mobile: +91-7494825211

---

## 🎨 Screenshots

### Terminal Mode
```
┌─────────────────────────────────────────────┐
│ ● ● ●        ashish@portfolio              │
├─────────────────────────────────────────────┤
│                                             │
│ ashish@portfolio:~$ help                   │
│ Available commands:                         │
│   help, ls, ./about, ./projects...         │
│                                             │
│ ashish@portfolio:~$ ./about                │
│ [Opens modal with About section]           │
│                                             │
└─────────────────────────────────────────────┘
```

### Visual Mode
- Clean tab navigation
- Smooth transitions
- Professional layout

---

**Built with ❤️ and ☕ by Ashish Kaushik**
