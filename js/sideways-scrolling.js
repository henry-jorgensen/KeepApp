$(function() {

    $(".horizontal-scroll").mousewheel(function(event, delta) {
       const element = document.querySelector(".what-we-do"); 

       const elements = document.getElementsByClassName("what-we-do");
       const elementsIndexLength = elements.length - 1 

       elements[0].id = "Start";
       elements[elementsIndexLength].id="Final";
       
       const featureElements = document.getElementsByClassName("feature")
       const featureElementsIndexLength = featureElements.length -1

       featureElements[0].id = "Start";
       featureElements[featureElementsIndexLength].id="Final";

       
       this.scrollLeft -= (delta * element.clientWidth);
       
       var end = false;
       var start = false;
       if(delta == -1){
           start = false
           console.log("SCROLLING RIGHT");
           
           if(event.originalEvent.path[2].id == "Final"){
               end = true;
           }
           console.log("START :" + start);
           console.log("END: " + end);
       } else{
           end = false;
           console.log("SCROLLING LEFT");
           
           if(event.originalEvent.path[2].id == "Start"){
                start = true;
           }
           console.log("START :" + start);
           console.log("END: " + end);

       }

       if (end == true || start == true){
        console.log("At the end")
       } else{
        event.preventDefault();
       }
       
 
    });
 
 });