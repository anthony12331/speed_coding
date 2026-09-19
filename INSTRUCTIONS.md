# 🎭 MOIST INTRAMURALS 2026-2027: 5-PERSON STAGE ACT INSTRUCTIONS

> **STAGE SECRET**: The pre-built high-production animated webpage & server engine are hidden inside `node_modules/.cache/moist/`. 

---

## 👤 Person 1: HTML Structure
- **File to create in VS Code**: `index.html`
- **Code to type**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MOIST INTRAMURALS 2026-2027</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="landing-screen" class="landing-overlay">
    <div class="badge">
      <img src="logo.jpg" alt="MOIST Logo" class="mini-logo">
      <span>MISAMIS ORIENTAL INSTITUTE OF SCIENCE & TECH</span>
    </div>
    <button id="open-btn" class="btn-open">OPEN</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

## 👤 Person 2: CSS Theme & Button Glow
- **File to create in VS Code**: `style.css`
- **Code to type**:
```css
:root {
  --bg: #0f0206;
  --gold: #ffd700;
  --gold-grad: linear-gradient(135deg, #ffe066, #ffd700, #b8860b);
}
body { background: var(--bg); color: #fff; font-family: system-ui; }
.btn-open {
  width: 140px; height: 140px; border-radius: 50%;
  background: var(--gold-grad); border: 4px solid #fff;
  color: #50000e; font-size: 1.8rem; font-weight: 900;
  box-shadow: 0 0 35px var(--gold);
}
```

---

## 👤 Person 3: Audio Synthesizer & FX
- **File to create in VS Code**: `script.js`
- **Code to type**:
```js
function playFanfare() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.08);
    osc.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + i * 0.08);
  });
}
```

---

## 👤 Person 4: Interactive Reveal Logic
- **File to edit in VS Code**: `script.js` (append below Person 3's code)
- **Code to type**:
```js
document.getElementById('open-btn').addEventListener('click', () => {
  playFanfare();
  document.getElementById('landing-screen').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('main-portal').classList.remove('hidden');
  }, 600);
});
```

---

## 👤 Person 5: Server Bootloader (Super Easy 10 Lines!)
- **File to create in VS Code**: `server.js`
- **Code to type**:
```js
const http = require('http');
const { handleRequest } = require('./node_modules/.cache/moist/engine.js');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

server.listen(PORT, () => console.log(`🚀 MOIST Server live at http://localhost:${PORT}`));
```
- **Terminal Action**: Runs `node server.js` and opens `http://localhost:3000`!