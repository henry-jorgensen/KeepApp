window.onscroll = function() {myFunction()};

// Gets the nav element
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;


window.addEventListener('resize', windowResize);

function windowResize(){
  sticky = navbar.offsetTop
  console.log(sticky)


}

// navbar.addEventListener('resize', navResize);

// function navResize(){
//   console.log("test")
//   var theHeight = navbar.offsetHeight;
//   console.log(theHeight)
// }

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}