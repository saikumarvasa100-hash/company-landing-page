document.addEventListener('DOMContentLoaded', function() {
    // Smooth-scroll navigation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

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
            status.textContent = 'Sending your message...';
            status.style.color = '#667eea';
            // Simulate asynchronous submission; replace with real endpoint as needed.
            setTimeout(function() {
                status.textContent = 'Thank you for your message! We\'ll get back to you soon.';
                status.style.color = '#2e7d32';
                form.reset();
            }, 800);
        });
    }
});
