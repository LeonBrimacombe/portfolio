const show_link = document.getElementById('show-toggle');
const hide_link = document.getElementById('hide-toggle');

console.log(show_link);

show_link.onclick = function(event) {
  console.log("Show link clicked");
  const div = document.getElementById('background');
  toggleVisibility(event, div);
  toggleVisibility(event, show_link);
  toggleVisibility(event, hide_link);
};

hide_link.onclick = function(event) {
  console.log("Hide link clicked");
  const div = document.getElementById('background');
  toggleVisibility(event, div);
  toggleVisibility(event, show_link);
  toggleVisibility(event, hide_link);
};

function toggleVisibility(event, element) {
  event.preventDefault();
  if (element.style.display !== 'none') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}
