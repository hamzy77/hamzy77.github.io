/* ══════════════════════════════════════════════
   HAMDI PORTFOLIO — main.js
   ══════════════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
document.addEventListener('mouseleave', () => cursor.style.opacity = '0');

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── SMOOTH SCROLL for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger children
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Apply reveal class to elements
const revealSelectors = [
  '.about-left', '.about-right',
  '.skill-card', '.work-card',
  '.contact-info-col', '.contact-form-col',
  '.footer-col', '.footer-brand-col',
  '.section-label'
];

revealSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.delay = i * 80;
    revealObserver.observe(el);
  });
});

/* ── SKILL BARS ANIMATION ── */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const w = bar.getAttribute('data-w');
        setTimeout(() => { bar.style.width = w + '%'; }, 300);
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) barObserver.observe(skillsSection);

/* ── FORM SUBMIT ── */
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('form-success');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    let valid = true;
    inputs.forEach(inp => {
      if (!inp.value.trim()) { inp.style.borderColor = '#ff4444'; valid = false; }
      else inp.style.borderColor = '';
    });
    if (!valid) return;

    // Simulate send
    submitBtn.innerHTML = '<span>SENDING...</span>';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.innerHTML = '<span>SENT ✦</span>';
      successMsg.classList.remove('hidden');
      inputs.forEach(inp => inp.value = '');
      setTimeout(() => {
        submitBtn.innerHTML = '<span>SUBMIT</span><span class="btn-arrow">→</span>';
        submitBtn.disabled = false;
        successMsg.classList.add('hidden');
      }, 4000);
    }, 1200);
  });
}

/* ── HERO TEXT GLITCH on load ── */
document.querySelectorAll('.hero-title .graffiti').forEach((el, i) => {
  el.style.animationDelay = (0.4 + i * 0.15) + 's';
});

/* ── PARALLAX on hero spray blobs ── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const s1 = document.querySelector('.s1');
  const s2 = document.querySelector('.s2');
  if (s1) s1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (s2) s2.style.transform = `translateY(${scrollY * -0.1}px)`;
});

/* ── CARD HOVER TILT ── */
document.querySelectorAll('.work-card, .skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── FOOTER SIGNATURE easter egg ── */
const footerSig = document.querySelector('.footer-sig');
if (footerSig) {
  footerSig.addEventListener('click', () => {
    footerSig.style.color = 'var(--lime)';
    footerSig.style.textShadow = '0 0 30px rgba(200,255,0,0.8)';
    setTimeout(() => {
      footerSig.style.color = '';
      footerSig.style.textShadow = '';
    }, 1500);
  });
}

/* ── NAV active link highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-left a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--lime)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => activeObserver.observe(sec));

console.log('%c HAMDY77 ', 'background:#C8FF00;color:#000;font-size:20px;padding:8px 16px;font-weight:bold;');
console.log('%c Portfolio by Hamdi Mohamed — Textile Designer ', 'color:#C8FF00;font-size:12px;');
