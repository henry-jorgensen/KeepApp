$(function() {

    $(".slideshow").mousewheel(function(event, delta) {
       const element = document.getElementById("test"); 
       this.scrollLeft -= (delta * element.clientWidth);
       
       console.log(element.clientWidth);
       console.log(delta);
       console.log();
       event.preventDefault();
 
    });
 
 });