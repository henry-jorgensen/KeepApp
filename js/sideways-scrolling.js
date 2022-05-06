const elements = document.getElementsByClassName("wwd");
const elementsIndexLength = elements.length - 1; 

elements[0].id = "Start";
elements[elementsIndexLength].id = "Final";

const featureElements = document.getElementsByClassName("feature-scroll")
const featureElementsIndexLength = featureElements.length -1

featureElements[0].id = "Start";
featureElements[featureElementsIndexLength].id = "Final";

var end = false;
var start = false;

var owl = $('.owl-carousel');
var wwdOwl = $('#wwd-carousel');
var featureOwl = $('#feature-carousel');

$(function() {
    $(".owl-stage").mousewheel(function(event, delta) {
        var elementRelativeTop = elements[0].getBoundingClientRect().top
        var elementRelativeBottom = elements[0].getBoundingClientRect().bottom

        var featureRelativeTop = featureElements[0].getBoundingClientRect().top
        var featureRelativeBottom = featureElements[0].getBoundingClientRect().bottom
       // console.log("TEST")
        //console.log(event)
        
        console.log(delta);
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

        var scrollingDelta = delta * this.clientWidth;
        
        if (end == true || start == true){
            console.log("At the end")
        } else{
            if(elementRelativeTop < 150 && elementRelativeTop > 0){
                if (scrollingDelta<0) {
                    console.log("NEXT")
    
                    wwdOwl.trigger('next.owl');
                    event.preventDefault();
                
                    
                } else {
                    console.log("PREV")
                    wwdOwl.trigger('prev.owl');
                    event.preventDefault();
                }
            }
            if(featureRelativeTop < 120 && featureRelativeBottom > 600){
                if (scrollingDelta<0) {
                    console.log("NEXT")

                    featureOwl.trigger('next.owl');
                    event.preventDefault();
                } else {
                    console.log("PREV")

                    featureOwl.trigger('prev.owl');
                    event.preventDefault();
                }
            }  
        }
    });
 });



owl.owlCarousel({
    loop:false,
    items: 1,
    nav:true
})

$(".owl-nav").remove();
$('.owl-dots').css({"position" : "absolute", "transform" : "translate(-50%, -50%)",
                     "left" : "50%", "top" : "96%"});
$(".horizontal-scroll").remove();
