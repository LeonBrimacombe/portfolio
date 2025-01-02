// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// show-hide background copy
const button = document.querySelector('#about-toggle');
const element = document.querySelector('#background');

button.addEventListener('click', () => {
  element.classList.toggle("hidden");
});
