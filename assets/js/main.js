// script.js
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Add click event listener to the hamburger button
hamburger.addEventListener('click', () => {
  menu.classList.toggle('open'); // Toggles the 'open' class on the menu
});

// script.js
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentSlideIndex = 0;

// Function to update the slide position
function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const newTranslateX = -currentSlideIndex * slideWidth;
  track.style.transform = `translateX(${newTranslateX}px)`;
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to the first slide
  updateSlidePosition();
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  currentSlideIndex =
    (currentSlideIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
  updateSlidePosition();
});

// script.js
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if a theme is already saved in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme); // Apply the saved theme
  toggleButton.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙'; // Update button text
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode'); // Toggle dark-mode class
  toggleButton.textContent = isDarkMode ? '☀️' : '🌙'; // Update button text
  localStorage.setItem('theme', isDarkMode ? 'dark-mode' : ''); // Save preference
});
