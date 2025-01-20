// Select all sections and elements with the 'animate' class
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const animateElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const element = entry.target;

    if (entry.isIntersecting) {
      element.classList.add("slide");
      console.log("Element animated:", element);
    }
  });
}, {
  threshold: 0.5
});

animateElements.forEach(element => {
  observer.observe(element);
});

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
