/* ══════════════════════════════════════════════
   HAMDI PORTFOLIO — GRAFFITI EDITORIAL STYLE
   ══════════════════════════════════════════════ */

:root {
  --lime:   #C8FF00;
  --black:  #080808;
  --dark:   #111111;
  --card:   #161616;
  --white:  #F0F0F0;
  --grey:   #555555;
  --border: #222222;
  --font-graffiti: 'Permanent Marker', cursive;
  --font-graffiti2: 'Rubik Dirt', cursive;
  --font-body:    'Chakra Petch', sans-serif;
}

/* ── RESET ── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  overflow-x: hidden;
  cursor: none;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ── NOISE OVERLAY ── */
.noise {
  position: fixed; inset: 0; z-index: 9999; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.35;
}

/* ── CURSOR ── */
.cursor {
  width: 20px; height: 20px;
  border: 2px solid var(--lime);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width .2s, height .2s, background .2s;
  mix-blend-mode: difference;
}
body:has(a:hover) .cursor,
body:has(button:hover) .cursor {
  width: 40px; height: 40px;
  background: rgba(200,255,0,0.15);
}

/* ── TYPOGRAPHY CLASSES ── */
.graffiti        { font-family: var(--font-graffiti); }
.graffiti-italic { font-family: var(--font-graffiti); font-style: italic; color: var(--lime); }

/* ══════════════ NAV ══════════════ */
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 48px;
  border-bottom: 1px solid var(--border);
  background: rgba(8,8,8,0.92);
  backdrop-filter: blur(12px);
  transition: padding .3s;
}
#navbar.scrolled { padding: 12px 48px; }

.nav-left, .nav-right {
  display: flex; gap: 32px; align-items: center;
}
.nav-left a, .nav-right a {
  font-family: var(--font-body);
  font-size: 11px; font-weight: 600;
  letter-spacing: 2px;
  color: #888;
  transition: color .2s;
}
.nav-left a:hover, .nav-right a:hover { color: var(--lime); }

.nav-brand {
  font-size: clamp(22px, 3vw, 30px);
  color: var(--lime);
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(200,255,0,0.4);
}
.nav-icon { font-size: 16px; }

/* ══════════════ HERO ══════════════ */
#hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: center;
  padding: 120px 48px 0;
  position: relative;
  overflow: hidden;
}

.hero-spray {
  position: absolute; border-radius: 50%;
  filter: blur(120px); pointer-events: none;
}
.s1 {
  width: 600px; height: 600px;
  background: rgba(200,255,0,0.07);
  top: -100px; left: -200px;
}
.s2 {
  width: 400px; height: 400px;
  background: rgba(200,255,0,0.05);
  bottom: 100px; right: -100px;
}

.hero-content { position: relative; z-index: 2; max-width: 1100px; }

.hero-label {
  font-size: 11px; letter-spacing: 4px;
  color: var(--lime); font-weight: 600;
  margin-bottom: 24px;
  opacity: 0; animation: fadeUp .8s .2s forwards;
}

.hero-title {
  display: flex; flex-wrap: wrap; align-items: baseline;
  gap: 0 16px;
  font-size: clamp(72px, 13vw, 180px);
  line-height: 0.92;
  margin-bottom: 32px;
  opacity: 0; animation: fadeUp .9s .4s forwards;
}
.hero-title .graffiti { color: var(--white); }
.hero-title .graffiti-italic { color: var(--lime); font-size: 0.7em; }

.hero-sub {
  font-size: clamp(14px, 2vw, 18px);
  color: #666; letter-spacing: 3px;
  margin-bottom: 40px;
  opacity: 0; animation: fadeUp .8s .6s forwards;
}

.hero-cta-row {
  display: flex; gap: 16px; flex-wrap: wrap;
  opacity: 0; animation: fadeUp .8s .8s forwards;
}

.btn-main {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--lime); color: var(--black);
  font-family: var(--font-graffiti);
  font-size: 16px; letter-spacing: 1px;
  padding: 14px 32px;
  border: 2px solid var(--lime);
  transition: background .2s, color .2s, transform .15s;
}
.btn-main:hover {
  background: transparent;
  color: var(--lime);
  transform: translate(-3px,-3px);
}

.btn-ghost {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: var(--white);
  font-family: var(--font-body);
  font-size: 12px; letter-spacing: 3px; font-weight: 600;
  padding: 14px 28px;
  border: 1px solid var(--border);
  transition: border-color .2s, color .2s;
}
.btn-ghost:hover { border-color: var(--lime); color: var(--lime); }

/* TICKER */
.hero-ticker {
  margin-top: 80px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 14px 0;
  overflow: hidden;
  position: relative; z-index: 2;
}
.ticker-track {
  display: flex; gap: 32px; align-items: center;
  white-space: nowrap;
  animation: ticker 22s linear infinite;
}
.ticker-track span {
  font-size: 11px; letter-spacing: 3px;
  color: #555; font-weight: 600;
}
.ticker-track .dot { color: var(--lime); font-size: 10px; }
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ══════════════ SECTION SHARED ══════════════ */
section {
  padding: 100px 48px;
  position: relative;
}
.section-label {
  font-size: 10px; letter-spacing: 4px;
  color: var(--lime); font-weight: 600;
  margin-bottom: 40px;
  display: flex; align-items: center; gap: 12px;
}
.section-label::after {
  content: ''; flex: 1; max-width: 60px;
  height: 1px; background: var(--lime); opacity: .4;
}
.section-title {
  font-size: clamp(60px, 10vw, 130px);
  line-height: 0.9;
  margin-bottom: 60px;
}
.section-title.centered { text-align: center; }
.highlight { color: var(--lime); }

/* ══════════════ ABOUT ══════════════ */
#about { border-top: 1px solid var(--border); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 80px; align-items: start;
}
.about-text {
  font-size: 16px; line-height: 1.85;
  color: #aaa; margin-bottom: 20px;
}
.about-tags {
  display: flex; flex-wrap: wrap; gap: 10px;
  margin-top: 32px;
}
.tag {
  font-size: 11px; letter-spacing: 1px;
  border: 1px solid var(--border);
  padding: 8px 16px; color: #888;
  transition: border-color .2s, color .2s;
}
.tag:hover { border-color: var(--lime); color: var(--lime); }

/* ══════════════ SKILLS ══════════════ */
#skills {
  border-top: 1px solid var(--border);
  background: var(--dark);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 20px;
}

.skill-card {
  background: var(--card);
  padding: 32px 28px;
  border: 1px solid var(--border);
  transition: border-color .25s, transform .2s;
}
.skill-card:hover {
  border-color: var(--lime);
  transform: translateY(-4px);
}
.skill-top {
  display: flex; justify-content: space-between;
  align-items: baseline; margin-bottom: 14px;
}
.skill-name {
  font-size: 15px; font-weight: 700;
  letter-spacing: 1px;
}
.skill-pct {
  font-family: var(--font-graffiti);
  font-size: 18px; color: var(--lime);
}
.skill-bar {
  height: 3px; background: #222;
  margin-bottom: 16px; overflow: hidden;
}
.skill-fill {
  height: 100%; width: 0;
  background: var(--lime);
  transition: width 1.2s cubic-bezier(.4,0,.2,1);
}
.skill-desc { font-size: 12px; color: #666; line-height: 1.6; }

.accent-card {
  background: var(--lime); border-color: var(--lime);
}
.accent-card:hover { transform: translateY(-4px); }
.skill-extra-label {
  font-size: 48px; color: var(--black);
  margin-bottom: 20px; line-height: 1;
}
.skill-extra-list { display: flex; flex-direction: column; gap: 8px; }
.skill-extra-list li {
  font-size: 13px; font-weight: 700;
  color: var(--black); letter-spacing: 1px;
}

/* ══════════════ WORK ══════════════ */
#work { border-top: 1px solid var(--border); }

.work-big {
  font-size: clamp(70px, 12vw, 160px);
  line-height: 0.9;
  margin-bottom: 60px;
}

.work-cards { display: flex; flex-direction: column; gap: 2px; }

.work-card {
  display: grid; grid-template-rows: auto 1fr;
  border: 1px solid var(--border);
  background: var(--card);
  transition: border-color .25s;
  overflow: hidden;
}
.work-card:hover { border-color: var(--lime); }

.work-card-header {
  display: flex; justify-content: space-between;
  align-items: center; padding: 24px 32px;
  border-bottom: 1px solid var(--border);
  background: #0f0f0f;
}
.work-meta { display: flex; align-items: center; gap: 16px; }
.work-date { font-size: 11px; letter-spacing: 2px; color: #555; font-weight: 600; }
.work-badge {
  font-size: 9px; letter-spacing: 3px; font-weight: 700;
  padding: 4px 12px; background: var(--lime); color: var(--black);
}
.edu-badge { background: #333; color: #aaa; }
.work-num {
  font-size: 64px; color: #1a1a1a;
  line-height: 1;
}

.work-card-body { padding: 32px; }
.work-title {
  font-family: var(--font-graffiti);
  font-size: clamp(28px, 4vw, 48px);
  color: var(--white); margin-bottom: 6px;
}
.work-company {
  font-size: 12px; letter-spacing: 3px;
  color: var(--lime); font-weight: 600;
  margin-bottom: 16px;
}
.work-desc { font-size: 14px; color: #777; line-height: 1.8; margin-bottom: 20px; }
.work-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.work-tags span {
  font-size: 10px; letter-spacing: 2px;
  border: 1px solid #2a2a2a; padding: 5px 12px; color: #555;
}

/* ══════════════ CONTACT ══════════════ */
#contact {
  border-top: 1px solid var(--border);
  background: var(--dark);
  overflow: hidden;
}

.spray-bg-contact {
  position: absolute; border-radius: 50%;
  filter: blur(150px); pointer-events: none;
}
.c1 { width: 500px; height: 500px; background: rgba(200,255,0,0.06); top: -100px; right: -100px; }
.c2 { width: 300px; height: 300px; background: rgba(200,255,0,0.04); bottom: 0; left: 100px; }

.contact-header { position: relative; z-index: 1; }
.contact-big {
  font-size: clamp(60px, 11vw, 150px);
  line-height: 0.9; margin-bottom: 60px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px; position: relative; z-index: 1;
}

.contact-sub-title {
  font-size: 10px; letter-spacing: 4px; color: var(--lime);
  font-weight: 600; margin-bottom: 20px;
}
.contact-tagline {
  font-family: var(--font-graffiti);
  font-size: clamp(22px, 3vw, 32px);
  line-height: 1.2; color: var(--lime);
  margin-bottom: 20px;
}
.contact-body { font-size: 13px; color: #666; line-height: 1.9; margin-bottom: 40px; }
.contact-details { display: flex; flex-direction: column; gap: 20px; }
.contact-item { display: flex; flex-direction: column; gap: 4px; }
.ci-label { font-size: 9px; letter-spacing: 3px; color: #444; font-weight: 700; }
.ci-val { font-size: 14px; color: #aaa; transition: color .2s; }
.ci-val:hover { color: var(--lime); }

/* FORM */
.form-group { margin-bottom: 22px; }
.form-group label {
  display: block; font-size: 10px;
  letter-spacing: 3px; color: #555;
  font-weight: 700; margin-bottom: 10px;
}
.req { color: #333; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form-input, .form-textarea {
  width: 100%;
  background: transparent;
  border: none; border-bottom: 1px solid #2a2a2a;
  color: var(--white);
  font-family: var(--font-body);
  font-size: 14px; padding: 12px 0;
  outline: none;
  transition: border-color .2s;
}
.form-input.full { width: 100%; }
.form-input:focus, .form-textarea:focus { border-color: var(--lime); }
.form-input::placeholder, .form-textarea::placeholder { color: #333; }
.form-textarea { height: 120px; resize: none; }

.btn-submit {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--lime); color: var(--black);
  font-family: var(--font-graffiti);
  font-size: 16px; letter-spacing: 1px;
  padding: 14px 32px; border: 2px solid var(--lime);
  cursor: none; margin-top: 8px;
  transition: background .2s, color .2s, transform .15s;
}
.btn-submit:hover {
  background: transparent; color: var(--lime);
  transform: translate(-3px, -3px);
}
.btn-arrow { font-size: 18px; }
.form-success {
  margin-top: 16px; font-size: 13px;
  color: var(--lime); letter-spacing: 2px;
}
.hidden { display: none; }

/* ══════════════ FOOTER ══════════════ */
#footer {
  border-top: 1px solid var(--border);
  padding: 60px 48px 0;
  background: var(--black);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 60px; padding-bottom: 48px;
  border-bottom: 1px solid var(--border);
}
.footer-col-title {
  font-size: 10px; letter-spacing: 3px;
  color: var(--lime); font-weight: 700;
  margin-bottom: 20px;
}
.footer-links { display: flex; flex-direction: column; gap: 10px; }
.footer-links a { font-size: 13px; color: #555; transition: color .2s; }
.footer-links a:hover { color: var(--white); }

.footer-brand-col { text-align: center; }
.footer-brand {
  font-size: clamp(36px, 6vw, 72px);
  color: var(--lime);
  text-shadow: 0 0 40px rgba(200,255,0,0.3);
  margin-bottom: 8px;
}
.footer-tagline { font-size: 11px; color: #444; letter-spacing: 2px; margin-bottom: 20px; }
.footer-socials { display: flex; gap: 12px; justify-content: center; }
.fsoc {
  width: 38px; height: 38px;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; color: #555;
  transition: border-color .2s, color .2s;
}
.fsoc:hover { border-color: var(--lime); color: var(--lime); }

.right-col { display: flex; flex-direction: column; gap: 8px; }
.right-col p, .right-col a { font-size: 13px; color: #555; }
.right-col a:hover { color: var(--lime); }

.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 0;
}
.footer-bottom span:first-child { font-size: 10px; letter-spacing: 2px; color: #333; }
.footer-sig {
  font-size: 20px; color: #222;
  transition: color .3s;
}
.footer-sig:hover { color: var(--lime); }

/* ══════════════ ANIMATIONS ══════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0; transform: translateY(40px);
  transition: opacity .8s ease, transform .8s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ══════════════ RESPONSIVE ══════════════ */
@media (max-width: 900px) {
  #navbar { padding: 16px 24px; }
  .nav-left { display: none; }
  section { padding: 70px 24px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .skills-grid { grid-template-columns: 1fr 1fr; }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .footer-grid { grid-template-columns: 1fr; gap: 40px; }
  #hero { padding: 100px 24px 0; }
  .work-card-header { padding: 16px 20px; }
  .work-card-body { padding: 20px; }
}

@media (max-width: 580px) {
  .skills-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: clamp(56px, 18vw, 100px); }
  .section-title { font-size: clamp(48px, 16vw, 90px); }
  .work-big { font-size: clamp(50px, 16vw, 90px); }
  .contact-big { font-size: clamp(46px, 15vw, 90px); }
  .form-row { grid-template-columns: 1fr; }
}
