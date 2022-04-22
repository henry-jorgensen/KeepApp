const elements = document.getElementsByClassName("what-we-do");
const elementsIndexLength = elements.length - 1; 

elements[0].id = "Start";
elements[elementsIndexLength].id = "Final";

const featureElements = document.getElementsByClassName("feature")
const featureElementsIndexLength = featureElements.length -1

featureElements[0].id = "Start";
featureElements[featureElementsIndexLength].id = "Final";

var end = false;
var start = false;

$(function() {
    $(".horizontal-scroll").mousewheel(function(event, delta) {
        var elementRelativeTop = elements[0].getBoundingClientRect().top
        var elementRelativeBottom = elements[0].getBoundingClientRect().bottom

        var featureRelativeTop = featureElements[0].getBoundingClientRect().top
        var featureRelativeBottom = featureElements[0].getBoundingClientRect().bottom
        console.log("TEST")
        console.log(event)
        

        if(delta == -1){
            //Scrolling right
            start = false

            if(event.target.parentNode.parentNode.id == "Final" || event.target.parentNode.id == "Final"){
                end = true;
            }

        } else{
            //Scrolling left
            end = false;

            if(event.target.parentNode.parentNode.id == "Start" || event.target.parentNode.id == "Start"){
                start = true;
            }
        }

        this.scrollLeft -= (delta * this.clientWidth);

        if (end == true || start == true){
            console.log("At the end")
        } else{
            event.preventDefault();
        }

       
    });
 });
