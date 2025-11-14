# Portfolio Project Specification Document

## Overview

This document describes the complete specification for a dual-interface personal portfolio website. It includes all requirements, architecture, components, behaviours, and interactions needed for an AI agent or developer to build the full system. The portfolio will have **two modes**: a **visual page** and a **terminal-like interface**. Users can switch between them and interact with the portfolio content through graphical or command-line metaphors.

---

# 1. Objectives

* Create a modern, unique portfolio that showcases personality and technical skill.
* Provide two views:

  * **Visual UI Mode**: A clean, minimal, animated portfolio.
  * **Terminal Mode**: A full command-line UI where users can run commands to explore content.
* Ensure the system is modular, open-source, and developer-friendly.
* Use Browserify + Babel + React + a Makefile-driven build system.
* Provide smooth transitions, accessibility, and mobile responsiveness.
* Enable easy future expansion (e.g., adding more commands or sections).

---

# 2. High-Level Architecture

The architecture will include:

## 2.1 Frontend Stack

* **React** for UI components.
* **Browserify + Babelify** bundling/transpilation.
* **Plain CSS or Tailwind** (choose one; document assumes you may use plain CSS or minimal utility classes).
* **Makefile** for build automation.

## 2.2 App Structure

The system has two main modes:

1. **Visual UI Mode**

   * Traditional portfolio with sections like About, Projects, Experience, Contact, etc.
2. **Terminal Mode** (Primary Feature)

   * Full-screen terminal simulation.
   * Supports commands like `help`, `ls`, `./about`, `./projects`, etc.
   * Opening a section displays a **modal popup** rendering the appropriate React component.

## 2.3 Code Organization

```
/src
  /terminal
    Terminal.jsx
    TerminalInput.jsx
    Commands.js
    TerminalParser.js
  /components
    About.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
    VisualLayout.jsx
  /ui
    Modal.jsx
    Button.jsx
  index.jsx
/public
  index.html
/build
  (compiled bundle)
Makefile
babel.config
package.json
```

---

# 3. User Flow Specification

## 3.1 Landing Screen

User visits site → sees a landing page with two options:

* "Enter Visual Mode"
* "Enter Terminal Mode"

## 3.2 Switching Modes

A toggle button will be present in both modes allowing seamless switching.

## 3.3 Visual Mode

* Standard portfolio layout.
* Smooth scroll navigation.
* Components for: About, Projects, Skills, Experience, Contact.
* Minimal animations.

## 3.4 Terminal Mode

A simulated shell-like environment that:

* Prints a greeting banner.
* Shows available commands.
* Waits for user input.
* Responds like a Unix shell.

Commands include:

### 3.4.1 Basic Commands

* `help`
* `clear`
* `ls`
* `cd <section>` (works but not required to change directories visually)
* `./about`
* `./projects`
* `./skills`
* `./experience`
* `./contact`

### 3.4.2 Behaviour

* Running `ls` prints list of available files:

```
about  projects  skills  experience  contact
```

* Running `./about` opens a modal:

  * This modal contains the React About component.
  * Terminal stays in the background.

### 3.4.3 Terminal Needs

* Fake terminal cursor blinking.
* Input capturing.
* Command history with up/down arrow keys.
* Scrollable output history.
* Smooth typing animation for some responses.
* Optional: Easter eggs (e.g., "cat secrets.txt").

---

# 4. Terminal Implementation Details

## 4.1 Terminal Renderer

A main component `Terminal.jsx` containing:

* Output log state array.
* Input line component.
* Methods for executing commands.

## 4.2 Terminal Parser

A file `TerminalParser.js` that:

* Receives raw input string.
* Tokenizes into command + args.
* Returns structured parsed command.

Example:

```
input: "./about"
→ { type: "EXEC_FILE", file: "about" }
```

## 4.3 Commands Definition

File `Commands.js` containing:

* Map of available commands.
* Handler functions.
* Aliases if necessary.

Example structure:

```js
export const commands = {
  help: () => "Available commands: ls, ./about, ...",
  ls: () => "about  projects  skills  experience  contact",
  clear: () => "__CLEAR_SCREEN__",
  execFile: (filename) => openModal(filename)
}
```

---

# 5. React Component Requirements

## 5.1 Shared Components

### Modal Component

* Dark semi-transparent background.
* Centered card.
* Close button.
* Takes a React component as `children`.
* Fully responsive.

### Switch Mode Button

* Floating button top-right.
* Instantly switches between Visual/Terminal mode.

## 5.2 Visual Mode Components

### Component Requirements:

* **About Component**

  * Profile intro
  * Mission statement
  * Key skills summary

* **Projects Component**

  * List of projects with images, descriptions, links

* **Skills Component**

  * Tech stack, icons, experience level

* **Experience Component**

  * Timeline job history
  * Achievements

* **Contact Component**

  * Email link
  * GitHub
  * LinkedIn

---

# 6. Visual Design Requirements

## 6.1 Visual Mode

* Light + minimal.
* Rounded cards.
* Subtle animations.
* White/black theme or your personal branding.
* Responsive on mobile.

## 6.2 Terminal Mode

* Monochrome or slight green tint classic terminal look.
* Fullscreen black background.
* White/green/amber text.
* Fake scanlines optional.

---

# 7. Performance Guidelines

* Lazy load the visual sections.
* Terminal mode should be lightweight.
* Bundle should be < 200kb if possible.
* Use Browserify transforms efficiently.

---

# 8. Build System Requirements

## 8.1 Browserify + Babel Setup

* `src/index.jsx` is main entry.
* Bundle to `build/bundle.js`.
* Use `babelify` to handle `.jsx`.
* Source maps in dev.

## 8.2 Makefile

### Targets:

* `make build`: production bundle
* `make dev`: start watchify
* `make clean`: clear build folder

---

# 9. Accessibility

* All modals must be focus-trappable.
* Terminal text readable with fixed-width font.
* Provide escape method in modals.
* Buttons have ARIA labels.

---

# 10. Future Extensions

* Add animations in terminal output.
* Add SSH-like login simulation.
* Add `theme` command in terminal.
* Add 3D background using Three.js in visual mode.

---

# 11. Deliverables Summary

A complete portfolio app with:

* Dual-interface system
* Terminal with command execution
* Visual mode with full portfolio content
* React components for each section
* Modals that render React components on command
* Makefile build system
* Browserify + Babel compilation
* Open-source ready codebase

---

# 12. Final Notes for the AI Agent

The agent building this should:

* Follow the folder structure strictly.
* Build all components as specified.
* Ensure terminal commands and modal popups work.
* Make UI visually pleasing and responsive.
* Produce clean, readable code.
* Document everything in the repo.
