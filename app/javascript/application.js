// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// show-hide background copy

const show_link = document.getElementById('show-toggle');
const hide_link = document.getElementById('hide-toggle');

show_link.onclick = function() {
  const div = document.getElementById('background');
  toggleVisbility(div)
  toggleVisbility(show_link)
  toggleVisbility(hide_link)
};

hide_link.onclick = function() {
  const div = document.getElementById('background');
  toggleVisbility(div)
  toggleVisbility(show_link)
  toggleVisbility(hide_link)
};


function toggleVisbility(element) {
  event.preventDefault();
  if (element.style.display !== 'none') {
    element.style.display = 'none';
  }
  else {
    element.style.display = 'block';
  };
};

/* Scroll-dependent animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      entry.target.classList.add('glow');
    }
  });
});

const techs = document.querySelectorAll('.tech');
techs.forEach((element) => observer.observe(element))
