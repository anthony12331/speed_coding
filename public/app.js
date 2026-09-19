document.getElementById('open-btn').addEventListener('click', () => {
  spawnBurst(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById('landing-screen').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('main-portal').classList.remove('hidden');
  }, 600);
});