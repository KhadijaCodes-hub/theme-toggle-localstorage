# 🌗 Dark & Light Mode Toggle

A modern and responsive **Dark/Light Mode Toggle Web Application** built using **HTML, CSS, and JavaScript**.
This project allows users to switch between themes and **automatically saves their preference using Local Storage**.

---

## ✨ Features

* 🌞 Light Mode (Default)
* 🌙 Dark Mode
* 🔄 Smooth theme transitions
* 💾 Persistent theme using Local Storage
* 🖥 System theme detection (`prefers-color-scheme`)
* 🎨 CSS Variables for easy theme management
* 📱 Fully responsive design
* ♿ Accessible toggle button (ARIA support + keyboard navigation)

---

## 🛠 Technologies Used

* **HTML5**
* **CSS3 (Variables + Transitions)**
* **JavaScript (DOM + Local Storage)**

---

## ⚙️ How It Works

### 1. Theme Switching

* Clicking the toggle button adds/removes the `dark-mode` class from `<body>`

### 2. Local Storage

* Selected theme is saved using:

```js
localStorage.setItem("theme", "dark")
```

### 3. Load Saved Theme

* On page load:

```js
const savedTheme = localStorage.getItem("theme")
```

### 4. System Theme Detection

* If no saved preference:

```js
window.matchMedia('(prefers-color-scheme: dark)')
```

---

## 🎯 UI Highlights

* Elegant typography (Playfair Display + DM Sans)
* Animated floating shapes in hero section
* Smooth hover effects and shadows
* Clean card-based layout

---

## 📁 Project Structure

```
📦 theme-toggle-localstorage
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┗ 📜 README.md
```

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/KhadijaCodes-hub/theme-toggle-localstorage.git
```

2. Open `index.html` in your browser

---

## 🎓 Learning Outcomes

* Practical use of **CSS variables**
* Working with **Local Storage**
* Implementing **theme switching logic**
* Improving **UI/UX with transitions**
* Writing clean and structured JavaScript

---

## 👩‍💻 Author

**Khadija Sabir**
GitHub: https://github.com/KhadijaCodes-hub
