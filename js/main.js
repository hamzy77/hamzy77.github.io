/* ─── HAMDY PORTFOLIO — script.js ──────────────────────────── */

/* ─── CUSTOM CURSOR ──────────────────────────────────────────── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let rx = 0, ry = 0, mx = 0, my = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  rx += (mx - rx) * .18;
  ry += (my - ry) * .18;
  cur.style.left  = mx + 'px';
  cur.style.top   = my + 'px';
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.transform    = 'translate(-50%,-50%) scale(2.5)';
    ring.style.width       = '60px';
    ring.style.height      = '60px';
    ring.style.borderColor = 'rgba(200,255,0,.7)';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.transform    = 'translate(-50%,-50%) scale(1)';
    ring.style.width       = '36px';
    ring.style.height      = '36px';
    ring.style.borderColor = 'rgba(200,255,0,.4)';
  });
});

/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .skill-card').forEach(el => revealObserver.observe(el));

/* ─── ACTIVE NAV ─────────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* ─── FORM SUBMIT ────────────────────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  const original = btn.textContent;
  btn.textContent = 'Sent! ✓';
  btn.style.background = '#fff';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}

/* ─── PARALLAX HERO TEXT ─────────────────────────────────────── */
const bigText = document.querySelector('.hero-big-text');
if (bigText) {
  window.addEventListener('scroll', () => {
    bigText.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
}

/* ─── SKILL BAR STAGGER ──────────────────────────────────────── */
// Give each skill card a slight delay based on its position
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
});

/* ─── MARQUEE PAUSE ON HOVER ─────────────────────────────────── */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

/* ─── NAV SCROLL STYLE ───────────────────────────────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.borderBottomColor = 'rgba(200,255,0,.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,.06)';
  }
}, { passive: true });

/* ─── EXPOSE handleSubmit GLOBALLY ──────────────────────────── */
window.handleSubmit = handleSubmit;
