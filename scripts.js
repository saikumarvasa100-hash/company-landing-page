document.addEventListener('DOMContentLoaded', function() {
    // Smooth-scroll navigation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            const open = navLinks.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Footer year
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Contact form submission handler
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            if (status) {
                status.textContent = 'Sending your message...';
                status.style.color = '#667eea';
            }
            // Simulate asynchronous submission; replace with real endpoint as needed.
            setTimeout(function() {
                if (status) {
                    status.textContent = 'Thank you for your message! We\'ll get back to you soon.';
                    status.style.color = '#2e7d32';
                }
                form.reset();
            }, 800);
        });
    }
});
