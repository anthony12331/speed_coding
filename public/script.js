document.getElementById('open-btn').addEventListener('click', () => {
  playFanfare();
  document.getElementById('landing-screen').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('main-portal').classList.remove('hidden');
  }, 600);
});