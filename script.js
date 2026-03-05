/* ─────────────────────────────────────
   AHMAD RAZA — Portfolio
   script.js
───────────────────────────────────── */

$(document).ready(function () {

  /* ── Typed.js — Hero ── */
  new Typed('.typing', {
    strings: [
      'AI Engineer',
      'ML Pipeline Builder',
      'Computer Vision Engineer',
      'Automation Architect',
      'Research Engineer'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1600,
    loop: true
  });

  /* ── Typed.js — About ── */
  new Typed('.typing-2', {
    strings: [
      'AI & ML Engineer',
      'Python Developer',
      'CV Systems Builder',
      'Automation Specialist'
    ],
    typeSpeed: 80,
    backSpeed: 45,
    backDelay: 2000,
    loop: true
  });

  /* ── Navbar scroll effect ── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }

    /* Scroll-up button */
    if ($(this).scrollTop() > 400) {
      $('#scrollUp').addClass('show');
    } else {
      $('#scrollUp').removeClass('show');
    }
  });

  /* ── Scroll up button ── */
  $('#scrollUp').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ── Mobile menu toggle ── */
  $('#hamburger').on('click', function () {
    $('.navbar .menu').toggleClass('open');
  });

  /* Close menu on link click */
  $('.navbar .menu a').on('click', function () {
    $('.navbar .menu').removeClass('open');
  });

  /* ── Active nav link on scroll ── */
  const sections = $('section, .stats-bar');
  const navLinks = $('.navbar .menu a');

  $(window).on('scroll', function () {
    let current = '';
    sections.each(function () {
      const sectionTop = $(this).offset().top - 80;
      if ($(window).scrollTop() >= sectionTop) {
        current = $(this).attr('id');
      }
    });

    navLinks.each(function () {
      $(this).removeClass('active');
      if ($(this).attr('href') === '#' + current) {
        $(this).addClass('active');
      }
    });
  });

  /* ── Reveal on scroll ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .exp-card, .proj-card, .research-card, .skill-category, .card, .stat-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  /* ── Contact form ── */
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const btn = $(this).find('button[type="submit"]');
    btn.text('Message Sent! ✓').css({ background: '#22c55e', color: '#000' }).prop('disabled', true);
    setTimeout(() => {
      btn.html('Send Message &nbsp;<i class="fas fa-paper-plane"></i>').css({ background: '', color: '' }).prop('disabled', false);
      $(this)[0].reset();
    }, 3000);
  });

  /* ── Smooth scroll for nav links ── */
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 64
      }, 700);
    }
  });

});

/* ── handle image fallback ── */
document.querySelectorAll('.proj-img img').forEach(img => {
  img.addEventListener('error', function () {
    this.parentElement.classList.add('no-img');
  });
});
