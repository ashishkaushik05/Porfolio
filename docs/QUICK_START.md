# Quick Start Guide

## Building & Running

### 1. Build the Project
```bash
cd /home/ashish/Documents/code/Porfolio

# Production build
make build

# Or development build with file watching
make dev
```

### 2. Serve the Application
Open the `public/index.html` file in a web browser, or use a local HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

Then visit: `http://localhost:8000/public/index.html`

---

## Testing the Terminal

Once the app loads, click **"Enter Terminal Mode"** to access the command-line interface.

### Try These Commands:

```bash
# Show help
help

# List available files
ls

# View a section
./about
./projects
./skills
./experience
./contact

# System commands
whoami
date
pwd

# Clear screen
clear

# Change directory (visual effect only)
cd projects
```

---

## Testing Visual Mode

Click **"Enter Visual Mode"** to see the portfolio in a traditional layout.

- Navigate using the menu buttons
- Use the **"🖥️ Terminal"** button to switch back

---

## Key Features to Explore

### Terminal Mode
- Type `help` to see all available commands
- Use **arrow keys ↑/↓** to navigate command history
- Press **Esc** to close modals
- Click the **"☀️ Visual Mode"** button to switch

### Visual Mode
- Click menu items to navigate sections
- All sections render with smooth animations
- Click **"🖥️ Terminal"** to switch modes
- Responsive design adapts to screen size

---

## Project Files Overview

| File | Purpose |
|------|---------|
| `src/index.jsx` | React entry point |
| `src/App.jsx` | Mode switching logic |
| `src/terminal/Terminal.jsx` | Terminal UI component |
| `src/terminal/TerminalInput.jsx` | Command input line |
| `src/TerminalParser.js` | Command parsing |
| `src/Commands.js` | Command handlers |
| `src/components/*.jsx` | Portfolio sections |
| `src/ui/*.jsx` | Reusable UI components |
| `src/styles.css` | All styling |
| `public/index.html` | HTML entry point |
| `build/bundle.js` | Compiled JavaScript |

---

## Development Workflow

### Make Changes
Edit files in the `src/` directory. Changes are automatically detected by `make dev`.

### View Changes
Refresh your browser to see updates (or use live reload if configured).

### Build for Production
```bash
make clean
make build
```

### Common Edits

**Change portfolio content:**
- Edit `src/components/About.jsx`, `Projects.jsx`, etc.

**Add new commands:**
- Add handler in `src/Commands.js`
- Update parser if needed in `src/TerminalParser.js`

**Change colors/styling:**
- Edit CSS variables in `src/styles.css` `:root` section

---

## Troubleshooting

### Bundle not building
```bash
npm install  # Reinstall dependencies
make clean
make build
```

### Page not loading
- Check that `public/index.html` is being served
- Ensure `build/bundle.js` exists
- Check browser console for errors

### Styles not applied
- Make sure the CSS file path in `index.html` is correct
- Browser cache might need clearing (Ctrl+F5 or Cmd+Shift+R)

---

## Next Steps

1. **Customize content** - Update About, Projects, Skills, Experience, Contact
2. **Add new commands** - Extend terminal functionality
3. **Modify styling** - Update colors and animations
4. **Deploy** - Push to GitHub Pages, Netlify, or your host

---

For more details, see `README.md` and `about.md` in the project root.
