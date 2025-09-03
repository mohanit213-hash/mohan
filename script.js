// scripts.js

const menuToggle = document.getElementById('menu-toggle');

const navList = document.getElementById('nav-list');

// Hamburger menu for mobile devices

menuToggle.addEventListener('click', () => {

  navList.classList.toggle('active');

});

// Simple contact form handling

document.getElementById('contact-form').addEventListener('submit', function(e) {

  e.preventDefault();

  document.getElementById('form-message').textContent =

    "Thank you for reaching out! I'll get back to you soon.";

  this.reset();

});