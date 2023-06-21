// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    navigation.classList.toggle('show');
});

// Form submission handling
const form = document.querySelector('#contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform form validation and submission handling here

    // Example: Display a success message on successful form submission
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    form.appendChild(successMessage);
    form.reset();
});
