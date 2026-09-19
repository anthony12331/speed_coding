/* ==========================================================================
   MOIST INTRAMURALS 2026-2027 - PRE-BUILT FRONTEND ENGINE (SUPABASE POWERED)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const SUPABASE_URL = 'https://lfloyhdkrvpfgvvlppah.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbG95aGRrcnZwZmd2dmxwcGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3Nzk0NTQsImV4cCI6MjEwNTM1NTQ1NH0.Kpme7uzC6xy69HMr31X57AGJTDpYKuJiwweoXhmjZWQ';

  const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
  };

  // 1. CANVAS FIREWORKS ENGINE
  const canvas = document.getElementById('fx-canvas');
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const ambientStars = [];

  for (let i = 0; i < 45; i++) {
    ambientStars.push({
      x: Math.random() * width, y: Math.random() * height,
      size: Math.random() * 2 + 1, speed: Math.random() * 0.5 + 0.2, opacity: Math.random()
    });
  }

  class Particle {
    constructor(x, y, color) {
      this.x = x; this.y = y; this.color = color;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 2;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.radius = Math.random() * 4 + 2;
      this.alpha = 1; this.friction = 0.96; this.gravity = 0.14;
    }

    draw() {
      ctx.save(); ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color; ctx.shadowBlur = 12; ctx.shadowColor = this.color;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    update() {
      this.vx *= this.friction; this.vy *= this.friction;
      this.vy += this.gravity; this.x += this.vx; this.y += this.vy;
      this.alpha -= 0.014;
    }
  }

  function spawnBurst(x, y, count = 75, customColors = null) {
    const defaultColors = ['#ffd700', '#ff3344', '#ffffff', '#ff9900', '#ff0055'];
    const colors = customColors || defaultColors;
    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, color));
    }
  }

  function renderFX() {
    ctx.clearRect(0, 0, width, height);

    ambientStars.forEach(star => {
      star.y -= star.speed;
      if (star.y < 0) star.y = height;
      ctx.fillStyle = `rgba(255, 215, 0, ${star.opacity})`;
      ctx.beginPath(); ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2); ctx.fill();
    });

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].draw();
      particles[i].update();
      if (particles[i].alpha <= 0) particles.splice(i, 1);
    }
    requestAnimationFrame(renderFX);
  }
  renderFX();

  // 2. WEB AUDIO SYNTHESIZER
  let audioCtx = null;
  function playFanfareSound() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;

    const oscBass = audioCtx.createOscillator();
    const gainBass = audioCtx.createGain();
    oscBass.type = 'triangle';
    oscBass.frequency.setValueAtTime(160, now);
    oscBass.frequency.exponentialRampToValueAtTime(30, now + 0.9);
    gainBass.gain.setValueAtTime(0.8, now);
    gainBass.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
    oscBass.connect(gainBass); gainBass.connect(audioCtx.destination);
    oscBass.start(now); oscBass.stop(now + 0.9);

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      gain.gain.setValueAtTime(0.01, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.35, now + index * 0.08 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 1.3);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(now + index * 0.08); osc.stop(now + index * 0.08 + 1.3);
    });
  }

  // 3. REVEAL PORTAL HANDLER
  const openBtn = document.getElementById('open-btn');
  const landingScreen = document.getElementById('landing-screen');
  const mainPortal = document.getElementById('main-portal');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      const rect = openBtn.getBoundingClientRect();
      playFanfareSound();
      spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 100);
      setTimeout(() => spawnBurst(width * 0.2, height * 0.3, 70), 200);
      setTimeout(() => spawnBurst(width * 0.8, height * 0.3, 70), 400);

      landingScreen.classList.add('fade-out');
      setTimeout(() => {
        landingScreen.style.display = 'none';
        mainPortal.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        checkTicketsAvailability();
      }, 600);
    });
  }

  // 4. SUPABASE BSIT FREE TICKET SYSTEM
  const bsitTicketBtn = document.getElementById('bsit-ticket-btn');
  const bsitBtnText = document.getElementById('bsit-btn-text');
  const ticketStatusCount = document.getElementById('ticket-status-count');
  const questionCard = document.getElementById('question-card');
  const presidentInput = document.getElementById('president-input');
  const claimBtn = document.getElementById('claim-btn');
  const claimBtnText = document.getElementById('claim-btn-text');
  const ticketResult = document.getElementById('ticket-result');

  async function checkTicketsAvailability() {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/tickets?is_claimed=eq.false&select=*&order=id.asc`, { headers: HEADERS });
      const tickets = await res.json();

      if (!tickets || tickets.length === 0) {
        setAllClaimedState();
      } else {
        ticketStatusCount.innerHTML = `🔥 <strong>${tickets.length} of 5</strong> BSIT Free Tickets Available!`;
      }
      return tickets;
    } catch (err) {
      console.error('Error fetching tickets:', err);
    }
  }

  function setAllClaimedState() {
    ticketStatusCount.innerHTML = `<span style="color: #ff3344; font-weight: 800;">❌ ALL 5 BSIT FREE TICKETS HAVE BEEN CLAIMED!</span>`;
    bsitTicketBtn.disabled = true;
    bsitBtnText.textContent = 'NOT AVAILABLE - ALREADY CLAIMED';
    questionCard.classList.add('hidden');
  }

  if (bsitTicketBtn) {
    bsitTicketBtn.addEventListener('click', () => {
      questionCard.classList.remove('hidden');
      questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      presidentInput.focus();
    });
  }

  function isPresidentNameCorrect(name) {
    const clean = name.trim().toLowerCase().replace(/\s+/g, ' ');
    // Accepts "reynaldo p valmores" or "reynaldo p. valmores"
    return clean === 'reynaldo p valmores' || clean === 'reynaldo p. valmores';
  }

  if (claimBtn) {
    claimBtn.addEventListener('click', async () => {
      const inputVal = presidentInput.value;

      if (!inputVal || inputVal.trim() === '') {
        showResult('error', '⚠️ Please enter the full name of the MOIST President!');
        return;
      }

      if (!isPresidentNameCorrect(inputVal)) {
        showResult('error', '❌ Incorrect President Name! Please check spelling (e.g. <em>Mark Anthony C. Digal</em> or <em>Mark Anthony C Digal</em>)');
        return;
      }

      claimBtn.disabled = true;
      claimBtnText.textContent = '⏳ CLAIMING TICKET...';

      const res = await fetch(`${SUPABASE_URL}/rest/v1/tickets?is_claimed=eq.false&select=*&order=id.asc&limit=1`, { headers: HEADERS });
      const tickets = await res.json();

      if (!tickets || tickets.length === 0) {
        setAllClaimedState();
        showResult('error', '❌ Sorry! The last BSIT Free Ticket was just claimed!');
        return;
      }

      const ticketToClaim = tickets[0];

      const patchRes = await fetch(`${SUPABASE_URL}/rest/v1/tickets?id=eq.${ticketToClaim.id}`, {
        method: 'PATCH',
        headers: { ...HEADERS, 'Prefer': 'return=representation' },
        body: JSON.stringify({
          is_claimed: true,
          claimed_at: new Date().toISOString()
        })
      });

      if (patchRes.ok) {
        spawnBurst(width / 2, height / 2, 110, ['#ffd700', '#ffffff', '#ff9900']);
        playFanfareSound();

        showResult('success', `
          <div>🎉 <strong>CONGRATULATIONS! TICKET CLAIMED!</strong> 🎉</div>
          <div style="font-size: 0.8rem; margin-top: 4px;">Your unique BSIT Free Ticket Code is:</div>
          <div class="gold-ticket-code">${ticketToClaim.code}</div>
          <div style="font-size: 0.72rem; color: #b9f6ca;">Take a screenshot of this code to redeem!</div>
        `);

        presidentInput.value = '';
        claimBtn.disabled = false;
        claimBtnText.textContent = 'SUBMIT ANSWER & CLAIM';
        checkTicketsAvailability();
      } else {
        claimBtn.disabled = false;
        claimBtnText.textContent = 'SUBMIT ANSWER & CLAIM';
        showResult('error', '⚠️ Network error while claiming ticket. Please try again!');
      }
    });
  }

  function showResult(type, htmlContent) {
    ticketResult.classList.remove('hidden', 'ticket-success', 'ticket-error');
    ticketResult.classList.add(type === 'success' ? 'ticket-success' : 'ticket-error');
    ticketResult.innerHTML = htmlContent;
  }

});
