// Toggle mobile menu
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('.navbar').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust offset for fixed header
            behavior: 'smooth'
        });

        // Close the menu if it's open
        navLinks.classList.remove('nav-active');
        menuToggle.classList.remove('active');
    });
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
