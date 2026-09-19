# 🎭 MOIST INTRAMURALS 2026-2027: 5-DEVELOPER STAGE ACT GUIDE

This guide provides the exact file names and short, memorizable code snippets (10–12 lines each) for the 5 developers during the live speed coding performance.

---

## 👤 Developer 1: HTML Structure
- **File to create in VS Code**: `index.html`
- **Code to memorize & type**:
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

## 👤 Developer 2: CSS Styling & Button Glow
- **File to create in VS Code**: `style.css`
- **Code to memorize & type**:
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

## 👤 Developer 3: Audio Synthesizer & Fireworks FX
- **File to create in VS Code**: `script.js`
- **Code to memorize & type**:
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

## 👤 Developer 4: Portal Reveal Click Handler
- **File to edit in VS Code**: `script.js` (append below Developer 3's code)
- **Code to memorize & type**:
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

## 👤 Developer 5: Server Launcher & Presenter
- **Action**: Opens VS Code terminal and runs:
```bash
node node_modules/.cache/moist/server.js
```
- **Result**: Launches the local server at `http://localhost:3000` and serves the full animated website!
