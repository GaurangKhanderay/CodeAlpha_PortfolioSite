// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        this.reset();
    });
});
