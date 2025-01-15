const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
const elements = document.querySelectorAll(".animate");


window.onscroll = () => {
  var current = "";

  // set section attributes
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log("Section changed")
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  // navbar item active
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
      console.log("Navbar active changed")
    }
  });

  // animations trigger
  elements.forEach((element) => {
    element.classList.remove("slide");
    if (current.contains(element)) {
      element.classList.add("slide");
    }
  });
};
