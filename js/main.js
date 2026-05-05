// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    navLinks.classList.contains('open')
      ? (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
         spans[1].style.opacity = '0',
         spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)')
      : (spans[0].style.transform = '',
         spans[1].style.opacity = '',
         spans[2].style.transform = '');
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

if (bookingForm) {
  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  const startDate = document.getElementById('startDate');
  const endDate = document.getElementById('endDate');
  if (startDate) startDate.min = today;
  if (endDate) endDate.min = today;

  if (startDate && endDate) {
    startDate.addEventListener('change', () => {
      endDate.min = startDate.value || today;
      if (endDate.value && endDate.value < startDate.value) {
        endDate.value = startDate.value;
      }
    });
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const required = bookingForm.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#ffb3c6';
        field.style.boxShadow = '0 0 0 4px rgba(255, 179, 198, 0.25)';
        valid = false;
        if (valid === false && field === required[0]) field.focus();
      }
    });

    if (!valid) return;

    // Show success state
    bookingForm.style.opacity = '0';
    bookingForm.style.transform = 'translateY(10px)';
    bookingForm.style.transition = 'all 0.3s ease';

    setTimeout(() => {
      bookingForm.style.display = 'none';
      successMessage.classList.add('show');
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  });
}

// Pet filter (pets.html)
const filterBtns = document.querySelectorAll('.filter-btn');
const petCards = document.querySelectorAll('.pet-card-full');

if (filterBtns.length && petCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      petCards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.3s ease both';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
