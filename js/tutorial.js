var expandButton = document.getElementById('expand');
var leftMenuColumn = document.getElementById('columnMenu');
var rightColumn = document.getElementById('rightCol')
var darkener = document.getElementById('darken')

var small = false
var temp = false
const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      var width = entry.contentRect.width;
      if(width > 1088){
          temp = false
          leftMenuColumn.style.opacity = "1"
          darkener.style.opacity = "0"
          expandButton.style.left = "1%"
          leftMenuColumn.style.pointerEvents = "all"
          expandButton.style.transform = "rotateY(0deg)"
          small = false
      } else{
          small = true
          if(small == true && temp == false){
            leftMenuColumn.style.opacity = "0"
            leftMenuColumn.style.pointerEvents = "none"
            temp = true;
          }
      }
    });
});

myObserver.observe(document.body);


var opacityBool = false;
function showMenu(){
    if (opacityBool == false){
        leftMenuColumn.style.opacity = "1";
        leftMenuColumn.style.pointerEvents = "all"
        rightColumn.style.pointerEvents = "none"
        if (small == true){
            expandButton.style.left = "80%";
        } else{
            expandButton.style.left = "70%";
        }
        
        //expandButton.style.transform = "rotateY(180deg)"
        darkener.style.opacity = "1"
        opacityBool = true
    } else{
        leftMenuColumn.style.opacity = "0";
        leftMenuColumn.style.pointerEvents = "none"
        rightColumn.style.pointerEvents = "all"
        expandButton.style.left = "1%"
        //expandButton.style.transform = "rotateY(0deg)"
        darkener.style.opacity = "0"
        opacityBool = false
    }
    
}