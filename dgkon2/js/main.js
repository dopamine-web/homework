// ── PAGE SYSTEM ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + name);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
  closeMenu();
}
function showProjectPage(n) {
  showPage('project-' + n);
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── BURGER MENU ──
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  if (burger) burger.classList.toggle('open', menuOpen);
  if (menu) menu.classList.toggle('open', menuOpen);
  if (overlay) overlay.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}
function closeMenu() {
  menuOpen = false;
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  if (burger) burger.classList.remove('open');
  if (menu) menu.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}
function mobileNav(target) {
  if (target === 'portfolio') {
    showPage('portfolio');
  } else {
    showPage('home');
    setTimeout(() => scrollToSection(target), 100);
  }
  closeMenu();
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── PORTFOLIO FILTER ──
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const main = document.getElementById('portfolio-main');
  document.querySelectorAll('.cat-subpage').forEach(s => s.classList.remove('active'));
  if (cat === 'all') {
    main.style.display = 'grid';
  } else {
    main.style.display = 'none';
    const sub = document.getElementById('cat-' + cat);
    if (sub) sub.classList.add('active');
  }
}

// ── SCROLL REVEAL ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// ── FORM ──
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Отправлено ✓';
  btn.style.background = '#4a7c59';
  setTimeout(() => { btn.textContent = 'Отправить запрос'; btn.style.background = ''; }, 3000);
}