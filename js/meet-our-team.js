const meetTeam = document.querySelector('.meet-team');
const teamHeader = document.querySelector('.team-header');
const teamImg = document.getElementById('team-img');
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
            meetTeam.classList.add('meet-team-transition');
            teamImg.src = "assets/about/Brain-White.png"
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
      meetTeam.classList.remove('meet-team-transition');
      teamHeader.classList.remove('transition-team-header');
      teamh1.classList.remove('transition-h1');
      teamImg.src = "assets/about/Brain-Dark.png"
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
  ideaGeneratorsButton.classList.add('toggle-active');
  ideaImplementorsButton.classList.remove('toggle-active');

  setTimeout(() =>{
    generatorTeam.classList.add("idea-visible");
  }, 100);
  generatorTeam.classList.add("idea-transition");
  implementorTeam.classList.remove("idea-transition");
  implementorTeam.classList.remove("idea-visible");

}

function toggleImplementor(){
  ideaImplementorsButton.classList.add('toggle-active');
  ideaGeneratorsButton.classList.remove('toggle-active');
  generatorTeam.classList.remove("idea-visible");
  generatorTeam.classList.remove("idea-transition");
  setTimeout(() =>{
    implementorTeam.classList.add("idea-visible");
  }, 100);
  implementorTeam.classList.add("idea-transition");
  


}



