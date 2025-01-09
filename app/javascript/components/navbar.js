const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log("Section changed")
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
      console.log("Navbar active changed")
    }
  });
};
