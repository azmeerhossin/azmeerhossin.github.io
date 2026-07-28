// ============================================
// script.js - Core Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // --- Loading Screen ---
  const loader = document.getElementById('loader');
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hide');
    }, 800);
  });

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  const progressFill = document.getElementById('progressFill');

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    progressFill.style.width = progress + '%';
  });

  // --- Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    hamburger.innerHTML = navLinks.classList.contains('open') ?
      '<i class="fas fa-times"></i>' :
      '<i class="fas fa-bars"></i>';
  });

  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('themeToggle');
  let isDark = false;

  themeToggle.addEventListener('click', function() {
    isDark = !isDark;
    document.body.style.background = isDark ? '#1A1A2E' : '#FFFFFF';
    document.body.style.color = isDark ? '#FFFFFF' : '#1A1A2E';
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    const cards = document.querySelectorAll('.about-card, .blog-card, .stat-card, .achievement-card, .experience-card, .edu-item, .timeline-item, .contact-card, .contact-info, .contact-form');
    cards.forEach(function(card) {
      card.style.background = isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF';
      card.style.color = isDark ? '#FFFFFF' : '#1A1A2E';
    });

    const navbar = document.querySelector('.navbar');
    navbar.style.background = isDark ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)';

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
      input.style.background = isDark ? 'rgba(255,255,255,0.05)' : '#F3F4F6';
      input.style.color = isDark ? '#FFFFFF' : '#1A1A2E';
    });
  });

  // --- Typing Animation ---
  const typedTexts = [
    'Lecturer | ICT Educator | Web Enthusiast',
    'Teacher | Sportsman | Traveller  ',
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedElement = document.getElementById('typed-text');

  function typeEffect() {
    const currentText = typedTexts[textIndex];
    if (isDeleting) {
      typedElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2500);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typedTexts.length;
      setTimeout(typeEffect, 500);
      return;
    }
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // --- Animated Counters ---
  const counters = document.querySelectorAll('.count');

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 30);
  }

  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const counter = entry.target;
        if (!counter.classList.contains('counted')) {
          counter.classList.add('counted');
          animateCounter(counter);
        }
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function(counter) {
    counterObserver.observe(counter);
  });

  // --- Back to Top Button ---
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Ripple Effect ---
  document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      setTimeout(function() {
        ripple.remove();
      }, 600);
    });
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Keyboard Navigation ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navLinks.classList.remove('open');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  console.log('🚀 Azmeer Portfolio — Premium Interactive Experience');
});