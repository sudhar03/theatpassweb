// Modern interactive effects for theAtpass website
(function() {
  'use strict';

  // Smooth scroll behavior
  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFAQ();
    initScrollAnimations();
    initSmoothScroll();
    initKeyboardNavigation();
  });

  // Navigation scroll behavior and mobile menu
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    let lastScroll = 0;

    // Scroll effect for navbar
    const toggleNavbar = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', toggleNavbar, { passive: true });

    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
      const toggleMobileMenu = () => {
        const isOpen = navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      };

      mobileMenuBtn.addEventListener('click', toggleMobileMenu);

      // Close menu when clicking a link
      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
          toggleMobileMenu();
        }
      });

      // Close menu on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
          toggleMobileMenu();
          mobileMenuBtn.focus();
        }
      });
    }
  }

  // FAQ accordion functionality
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      // Set accessibility attributes
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', `faq-answer-${index}`);
      answer.setAttribute('id', `faq-answer-${index}`);
      answer.setAttribute('aria-hidden', 'true');
      
      question.addEventListener('click', () => {
        toggleFAQ(item, faqItems);
      });

      // Keyboard support
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFAQ(item, faqItems);
        }
      });
    });
  }

  function toggleFAQ(activeItem, allItems) {
    const isActive = activeItem.classList.contains('active');
    const activeQuestion = activeItem.querySelector('.faq-question');
    const activeAnswer = activeItem.querySelector('.faq-answer');
    
    // Close all FAQ items
    allItems.forEach(item => {
      item.classList.remove('active');
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      question.setAttribute('aria-expanded', 'false');
      answer.setAttribute('aria-hidden', 'true');
    });
    
    // Open current item if it wasn't active
    if (!isActive) {
      activeItem.classList.add('active');
      activeQuestion.setAttribute('aria-expanded', 'true');
      activeAnswer.setAttribute('aria-hidden', 'false');
    }
  }

  // Scroll animations for elements
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation classes based on element type
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transitionDelay = `${index * 0.05}s`;
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe cards and other elements for scroll animations
    const animatedElements = document.querySelectorAll(
      '.step-card, .service-card, .testimonial-card, .comparison-card'
    );
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just a "#"
        if (href === '#') {
          return;
        }
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Set focus to target for accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
          targetElement.removeAttribute('tabindex');
        }
      });
    });
  }

  // Keyboard navigation enhancements
    function initKeyboardNavigation() {
        // Focus visible styles are already handled in CSS with :focus-visible
        // Clean keyboard navigation without extra elements above logo
    }

  // Add smooth reveal for sections
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
  });
})();
