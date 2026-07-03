# TaskFlow — Sleek Todo Dashboard ⚡️

A modern, high-performance Todo & Project Management Dashboard web application built with Vanilla JavaScript, HTML5 Native Modals (`<dialog>`), and custom glassmorphism CSS. Originally created as part of **The Odin Project** curriculum, this application has been completely refactored to align with modern web standards, top-tier security practices, and responsive design excellence.

---

## ✨ Features

- **🎨 Sleek Dark Glassmorphism UI:** Crafted with vibrant custom HSL gradients, deep dark-mode palettes, subtle backdrop blur filters (`backdrop-filter: blur()`), and smooth micro-animations.
- **📁 Dashboard & Sidebar Layout:** Easily organize tasks into custom projects. Switch between projects seamlessly with a responsive sidebar that collapses gracefully on smaller viewports.
- **🚀 Native HTML5 Modals:** Uses modern `<dialog>` elements with native `.showModal()` APIs, built-in keyboard focus trapping, light-dismiss backdrops (`::backdrop`), and zero external UI dependencies.
- **🔒 Security First (XSS Protection):** All user-provided inputs (project names, task descriptions, dates) are systematically sanitized using HTML character escaping before rendering to prevent Cross-Site Scripting (XSS) vulnerabilities.
- **💾 Persistent LocalStorage Sync:** State is managed cleanly in memory using JavaScript objects and synced atomically to `localStorage` without redundant JSON serialization.
- **🏷️ Priority Badges & Date Tracking:** Categorize tasks by **Low**, **Medium**, or **High** priority with distinct color-coded badges. Automatically highlights overdue tasks.
- **📦 Optimized Webpack 5 Bundle:** Bundled cleanly with tree-shaking and dead-code elimination, compatible with Node v20/v24+.

---

## 🛠️ Technology Stack

- **Core:** HTML5 & Vanilla JavaScript (ES6+ modules)
- **Styling:** Vanilla CSS3 (CSS Grid, Flexbox, Custom Variables, Transitions)
- **Typography:** Google Fonts (`Plus Jakarta Sans`)
- **Icons:** Font Awesome 5
- **Build Tool:** Webpack 5 & Webpack CLI

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or newer) installed on your system.

### 1. Installation
Clone the repository and install the build dependencies:

```bash
git clone https://github.com/hamilto8/todo-list.git
cd todo-list
npm install
```

### 2. Building the Project
Compile the frontend JavaScript bundle using Webpack:

```bash
npm run build
```

This will generate the optimized `main.js` bundle inside the `/dist` directory.

### 3. Running Locally
Simply open the `dist/index.html` file directly in any modern web browser:

```bash
# On macOS
open dist/index.html

# On Linux
xdg-open dist/index.html

# On Windows
start dist/index.html
```

---

## 📂 Project Structure

```text
todo-list/
├── dist/
│   ├── index.html       # Main HTML shell containing native dialog containers
│   ├── style.css        # Glassmorphic design system and responsive styles
│   └── main.js          # Compiled Webpack application bundle
├── src/
│   ├── index.js         # Entry point: event bindings, modal triggers, form submissions
│   ├── homePage.js      # Core rendering engine: sidebar, active project tasks, XSS escaping
│   ├── todoProject.js   # Project data model and demo data seeding logic
│   ├── todo.js          # Todo item data model class
│   └── todoProjectList.js # LocalStorage initialization
├── package.json         # Project metadata and npm scripts
└── webpack.config.js    # Webpack 5 configuration
```

---

## 🛡️ Security & Architecture Notes

1. **No Eval / No Raw InnerHTML Injection:** Unlike older Vanilla JS applications that string-interpolate user input directly into `innerHTML`, TaskFlow runs all user strings through an `escapeHTML()` sanitizer before DOM insertion.
2. **Clean State Management:** Eliminated legacy patterns of double-JSON-encoding arrays within localStorage. State lives in clean JavaScript memory objects during execution.
3. **No Polyfill Bloat:** Relies on Baseline Widely Available browser APIs (`<dialog>`, CSS custom properties, logical properties), keeping the bundle footprint minimal (`~23 KiB`).

---

## 📝 License

This project is licensed under the ISC License. Designed and crafted by Michael Hamilton (2021–2026).
