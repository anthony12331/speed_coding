function spawnBurst(x, y) {
  const canvas = document.getElementById('fx-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 2;
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(x + Math.cos(angle) * speed, y + Math.sin(angle) * speed, 4, 4);
  }
}