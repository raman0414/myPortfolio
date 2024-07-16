document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    this.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('is-active');
        document.getElementById('nav-links').classList.remove('active');
    });
});
