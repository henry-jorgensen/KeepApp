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

const teamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        headerTimeout = setTimeout(() =>{
          if (ideaGeneratorsButton.className == "toggle toggle-active"){
            generatorTeam.classList.add("idea-transition");
          }
          else if (ideaImplementorsButton.className == "toggle toggle-active"){
            implementorTeam.classList.add("idea-transition");
          }
            slider.classList.add('moving-piece-transition')
            brainSVG.classList.add('brain-transition')
            teamHeader.classList.add('transition-team-header');
            teamh1.classList.add('transition-h1');
            teamh1.innerHTML = "Meet our Team"
        }, 1400);

        peopleTimeout = setTimeout(() =>{
          if (ideaGeneratorsButton.className == "toggle toggle-active"){
            generatorTeam.classList.add("idea-transition");
            setTimeout(() =>{
              generatorTeam.classList.add("idea-visible");
            }, 100);
          }
          else if (ideaImplementorsButton.className == "toggle toggle-active"){
            implementorTeam.classList.add("idea-transition");
            setTimeout(() =>{
              implementorTeam.classList.add("idea-visible");
            }, 100);
          }
          teamButtons.classList.add("idea-transition");
          setTimeout(() =>{
            teamButtons.classList.add("idea-visible");
          }, 100);
        }, 3000);

        return;
      }

      clearTimeout(headerTimeout)
      clearTimeout(peopleTimeout)
      slider.classList.remove('moving-piece-transition')
      teamHeader.classList.remove('transition-team-header');
      teamh1.classList.remove('transition-h1');
      brainSVG.classList.remove('brain-transition')
      teamh1.innerHTML = "Brains at Work"
      teamButtons.classList.remove("idea-transition");
      generatorTeam.classList.remove("idea-visible");
      implementorTeam.classList.remove("idea-visible");
      teamButtons.classList.remove("idea-visible");

    });
  });
  
teamObserver.observe(document.querySelector('.meet-team'));

const ideaGeneratorsButton = document.getElementById('idea-generator');
const ideaImplementorsButton = document.getElementById('idea-implementor');

const generatorTeam = document.getElementById("generators");
const implementorTeam = document.getElementById("implementors");


function toggleGenerator(){
  clearTimeouts()

  ideaGeneratorsButton.classList.add('toggle-active');
  ideaImplementorsButton.classList.remove('toggle-active');

  setTimeout(() => {
    implementorTeam.classList.remove("idea-transition")
  }, 750); 

  implementorTeam.classList.remove('idea-visible')

  setTimeout(() => {
    generatorTeam.classList.add("idea-visible");
  }, 750);
  setTimeout(() => {
    generatorTeam.classList.add("idea-transition");
  }, 720);
  

}

function toggleImplementor(){
  clearTimeouts()

  ideaImplementorsButton.classList.add('toggle-active');
  ideaGeneratorsButton.classList.remove('toggle-active');

  setTimeout(() => {
    generatorTeam.classList.remove("idea-transition")
  }, 750); 

  generatorTeam.classList.remove('idea-visible')

  setTimeout(() => {
    implementorTeam.classList.add('idea-visible')
  }, 750);

  setTimeout(() => {
    implementorTeam.classList.add('idea-transition')
  }, 700);

}

function clearTimeouts(){
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id); 
  }
}
