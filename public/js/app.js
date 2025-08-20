// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

function handleSearch() {
  const query = searchInput.value.trim();
  if (query) {
    // Aquí puedes agregar la lógica para conectar con tu API de NestJS
    console.log('Buscando:', query);
    // Ejemplo: window.location.href = `/pokemon/${query}`;
  }
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
  // Animate cards on scroll
  const cards = document.querySelectorAll('.stat-card, .feature-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Pokeball click effect
  const pokeball = document.querySelector('.pokeball');
  pokeball.addEventListener('click', function () {
    this.style.animation = 'none'; // Pausa la animación
    this.style.transform = 'scale(1.2) translateY(-20px)';
    setTimeout(() => {
      this.style.transform = 'scale(1) translateY(-20px)';
      this.style.animation = ''; // Restaura la animación
    }, 200);
  });
});

// Active navigation link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    navLinks.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');
  });
});
