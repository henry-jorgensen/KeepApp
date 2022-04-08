window.onscroll = function() {myFunction()};

// Gets the nav element
var navbar = document.getElementById("nav");
var topBar = document.getElementById("top-bar")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

window.addEventListener('resize', windowResize);

function windowResize(){
  sticky = topBar.clientHeight
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}