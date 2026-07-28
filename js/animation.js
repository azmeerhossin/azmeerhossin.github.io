// ============================================
// animation.js - GSAP Scroll Animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded. Animations will be basic.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // --- Lenis Smooth Scroll ---
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: function(t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function(time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        }
      });
    });
  }

  // --- Hero Animations ---
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

  heroTL
    .from('.hero-greeting', { opacity: 0, y: 40, duration: 0.8 })
    .from('.hero-name', { opacity: 0, y: 50, duration: 1 }, '-=0.4')
    .from('.hero-typed', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
    .from('.hero-bio', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.hero-stats div', { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, '-=0.3')
    .from('.hero-actions .btn', { opacity: 0, y: 30, stagger: 0.15, duration: 0.6 }, '-=0.3')
    .from('.hero-socials a', { opacity: 0, y: 20, stagger: 0.08, duration: 0.5 }, '-=0.3')
    .from('.profile-frame', { opacity: 0, scale: 0.8, duration: 1.2, ease: 'back.out(1.7)' }, '-=0.8');

  // --- Floating Shapes Parallax ---
  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to('.shape1', { x: x * 0.3, y: y * 0.3, duration: 1.2, ease: 'power2.out' });
    gsap.to('.shape2', { x: x * -0.2, y: y * -0.2, duration: 1.5, ease: 'power2.out' });
  });

  // --- Section Titles ---
  gsap.utils.toArray('.section-title').forEach(function(title) {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  // --- About Cards ---
  gsap.utils.toArray('.about-card').forEach(function(card, i) {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'back.out(1.2)',
    });
  });

  // --- Stat Cards ---
  gsap.utils.toArray('.stat-card').forEach(function(card, i) {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'back.out(1.2)',
    });
  });

  // --- Blog Cards ---
  gsap.utils.toArray('.blog-card').forEach(function(card, i) {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'back.out(1.2)',
    });
  });

  // --- Gallery Items ---
  gsap.utils.toArray('.gallery-item').forEach(function(item, i) {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: i * 0.06,
      ease: 'power2.out',
    });
  });

  // --- Timeline Items ---
  gsap.utils.toArray('.timeline-item').forEach(function(item, i) {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: i % 2 === 0 ? -40 : 40,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power2.out',
    });
  });

  // --- Experience Cards ---
  gsap.utils.toArray('.experience-card').forEach(function(card, i) {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out',
    });
  });

  // --- Education Items ---
  gsap.utils.toArray('.edu-item').forEach(function(item, i) {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out',
    });
  });

  // --- Achievement Cards ---
  gsap.utils.toArray('.achievement-card').forEach(function(card, i) {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'back.out(1.2)',
    });
  });

  // --- Blog Posts ---
  gsap.utils.toArray('.blog-post').forEach(function(post, i) {
    gsap.from(post, {
      scrollTrigger: {
        trigger: post,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out',
    });
  });

  // --- Vlog Cards ---
  gsap.utils.toArray('.vlog-card').forEach(function(card, i) {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out',
    });
  });

  // --- Contact Form ---
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power2.out',
  });

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: 'power2.out',
  });

  // --- Footer ---
  gsap.from('.footer-grid > div', {
    scrollTrigger: {
      trigger: '.mega-footer',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out',
  });

  // --- Navbar Active Link ---
  const sections = gsap.utils.toArray('.section, .hero-section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(function(link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

  sections.forEach(function(section) {
    activeObserver.observe(section);
  });

  // --- Refresh ScrollTrigger ---
  ScrollTrigger.refresh();

  console.log('🎬 GSAP Animations Initialized');
});