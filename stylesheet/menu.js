// Get the menu toggle button
const menuToggle = document.querySelector('.menu-toggle');

// Get the navigation menu
const navigationMenu = document.querySelector('.menu');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the navigation menu's visibility
  navigationMenu.classList.toggle('show');
});