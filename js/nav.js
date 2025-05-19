// Toggle mobile menu (giữ nguyên)
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hiệu ứng scroll cho phần HERO
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      hero.classList.add('scrolled');
    } else {
      hero.classList.remove('scrolled');
    }
  });
});