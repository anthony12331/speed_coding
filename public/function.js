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