function clearTimeouts(){
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id); 
  }
}

const meetTeam = document.querySelector('.meet-team');
const slider = document.querySelector('.moving-piece')
const teamHeader = document.querySelector('.team-header');
const teamImg = document.getElementById('team-img');
const brainSVG = document.getElementById('svg-path')
const teamh1 = document.querySelector('.team-h1');
const theTeam = document.querySelector('.idea-people')
const teamButtons = document.querySelector('.team-buttons');

teamHeader.classList.remove('transition-team-header');

var personCount = document.querySelector('.idea-people').childElementCount;

var headerTimeout;
var peopleTimeout;
var elementsIn;
const teamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elementsIn = document.getElementsByClassName('person')
        headerTimeout = setTimeout(() =>{
          if (ideaGeneratorsButton.className == "toggle toggle-active"){
            if (elementsIn.length == 0){
              createElements("Generator")
            }
            
            ideaPeople.classList.add("idea-transition"); 
          }
          else if (ideaImplementorsButton.className == "toggle toggle-active"){
            if (elementsIn.length == 0){
              createElements("Implementor")
            }

            ideaPeople.classList.add("idea-transition");
          }
            slider.classList.add('moving-piece-transition')
            brainSVG.classList.add('brain-transition')
            teamHeader.classList.add('transition-team-header');
            teamh1.classList.add('transition-h1');
            teamh1.innerHTML = "Meet our Team"
        }, 1400);

        peopleTimeout = setTimeout(() =>{
          if (ideaGeneratorsButton.className == "toggle toggle-active"){
            ideaPeople.classList.add("idea-transition");
            setTimeout(() =>{
              ideaPeople.classList.add("idea-visible");
            }, 100);
          }
          else if (ideaImplementorsButton.className == "toggle toggle-active"){
            ideaPeople.classList.add("idea-transition");
            setTimeout(() =>{
              ideaPeople.classList.add("idea-visible");
            }, 100);
          }
          teamButtons.classList.add("idea-transition");
          setTimeout(() =>{
            teamButtons.classList.add("idea-visible");
          }, 100);
        }, 3000);

        return;
      }

      // clearTimeout(headerTimeout)
      // clearTimeout(peopleTimeout)
      // slider.classList.remove('moving-piece-transition')
      // teamHeader.classList.remove('transition-team-header');
      // teamh1.classList.remove('transition-h1');
      // brainSVG.classList.remove('brain-transition')
      // teamh1.innerHTML = "Brains at Work"
      // teamButtons.classList.remove("idea-transition");
      // ideaPeople.classList.remove("idea-visible");
      // teamButtons.classList.remove("idea-visible");

    });
  });
  
teamObserver.observe(document.querySelector('.meet-team'));

const ideaGeneratorsButton = document.getElementById('idea-generator');
const ideaImplementorsButton = document.getElementById('idea-implementor');

const ideaPeople = document.getElementById('idea-people')

function toggleGenerator(){
  clearTimeouts()

  ideaPeople.classList.remove('idea-visible')

  setTimeout(() => {
    deleteElements()
  }, 600);
  
  setTimeout(() => {
    createElements("Generator")
    ideaPeople.classList.add('idea-visible')
  }, 700);
  
  ideaGeneratorsButton.classList.add('toggle-active');
  ideaImplementorsButton.classList.remove('toggle-active');
}

function toggleImplementor(){
  clearTimeouts()

  ideaPeople.classList.remove('idea-visible')

  setTimeout(() => {
    deleteElements()
  }, 600);
  
  setTimeout(() => {
    createElements("Implementor")
    ideaPeople.classList.add('idea-visible')
  }, 700);
  

  
  ideaImplementorsButton.classList.add('toggle-active');
  ideaGeneratorsButton.classList.remove('toggle-active');
}

var listDict = [[{name: "Lorem Ipsum", role: "Developer", img: "assets/photos/Face.jpg"}, {name: "Lorem Ipsum", role: "Developer", img: "assets/photos/Face.jpg"}, {name: "Lorem Ipsum", role: "Developer", img: "assets/photos/Face.jpg"}, {name: "Lorem Ipsum", role: "Developer", img: "assets/photos/Face.jpg"}], [{name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}, {name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}, {name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}, {name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}, {name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}, {name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}, {name: "Lorem Ipsum", role: "Engineer", img: "assets/photos/Face2.jpg"}]]

function deleteElements(){
  elementsIn = document.getElementsByClassName('person')
    var length = elementsIn.length
    var i = 0
    while (i == 0){
      i = 0
      if (elementsIn[i] != undefined){
        elementsIn[i].remove()
      } else {
        break
      } 
    }
}

function createElementsLoop(type){
  var ideaPeopleDiv = document.getElementById('idea-people')

  for (var i = 0; i < listDict[type].length; i++){
    var outerDiv = document.createElement("div")
    outerDiv.classList.add("person")
    
    var photoDiv = document.createElement("div")
    photoDiv.classList.add('photo')
    var photoImg = document.createElement("img")
    photoImg.src = listDict[type][i].img
    photoDiv.appendChild(photoImg)

    var nameDiv = document.createElement("div")
    nameDiv.classList.add('name')

    var roleDiv = document.createElement("div")
    roleDiv.classList.add('role')
    roleDiv.innerHTML = listDict[type][i].role
    nameDiv.innerHTML = listDict[type][i].name

    outerDiv.appendChild(photoDiv)
    outerDiv.appendChild(nameDiv)
    outerDiv.appendChild(roleDiv)

    ideaPeopleDiv.appendChild(outerDiv)
  } 
}

function createElements(type) {
    console.log("HIT" + type)
    var index
    if (type == "Generator"){
        index = 0
    } else if (type == "Implementor"){
        index = 1
    }

    createElementsLoop(index)
}
