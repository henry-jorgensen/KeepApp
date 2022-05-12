const meetTeam = document.querySelector('.meet-team');
const teamHeader = document.querySelector('.team-header');
const teamImg = document.getElementById('team-img');
const teamh1 = document.querySelector('.team-h1');
const theTeam = document.querySelector('.idea-people')
const teamButtons = document.querySelector('.team-buttons');

teamHeader.classList.remove('transition-team-header');

var personCount = document.querySelector('.idea-people').childElementCount;

const teamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() =>{
          if (ideaGeneratorsButton.className == "toggle toggle-active"){
            generatorTeam.style.display = "flex"
          }
          else if (ideaImplementorsButton.className == "toggle toggle-active"){
            implementorTeam.style.display = "flex"
          }
            meetTeam.classList.add('meet-team-transition');
            teamImg.src = "assets/about/Brain-White.png"
            teamHeader.classList.add('transition-team-header');
            teamh1.classList.add('transition-h1');
            teamh1.innerHTML = "Meet our Team"
        }, 1400);

        setTimeout(() =>{
          if (ideaGeneratorsButton.className == "toggle toggle-active"){
            generatorTeam.style.display = "flex"
            generatorTeam.classList.add("idea-transition");
          }
          else if (ideaImplementorsButton.className == "toggle toggle-active"){
            implementorTeam.style.display = "flex"
            implementorTeam.classList.add("idea-transition");
          }
          teamButtons.classList.add("idea-transition");
        }, 3000);
        
        return;
      }
      meetTeam.classList.remove('meet-team-transition');
      teamHeader.classList.remove('transition-team-header');
      teamh1.classList.remove('transition-h1');
      teamImg.src = "assets/about/Brain-Dark.png"
      teamh1.innerHTML = "Brains at Work"
      generatorTeam.classList.remove("idea-transition");
      implementorTeam.classList.remove("idea-transition");
      teamButtons.classList.remove("idea-transition");

    });
  });
  
teamObserver.observe(document.querySelector('.meet-team'));

const ideaGeneratorsButton = document.getElementById('ideaGenerator');
const ideaImplementorsButton = document.getElementById('ideaImplementor');

const generatorTeam = document.getElementById("generators");
const implementorTeam = document.getElementById("implementors");


function toggleGenerator(){
  ideaGeneratorsButton.classList.add('toggle-active');
  ideaImplementorsButton.classList.remove('toggle-active');
  generatorTeam.classList.add("idea-transition");
  implementorTeam.classList.remove("idea-transition");
  implementorTeam.style.display = "none"
  generatorTeam.style.display = "flex"

}

function toggleImplementor(){
  ideaImplementorsButton.classList.add('toggle-active');
  ideaGeneratorsButton.classList.remove('toggle-active');
  generatorTeam.classList.remove("idea-transition");
  implementorTeam.classList.add("idea-transition");
  implementorTeam.style.display = "flex"
  generatorTeam.style.display = "none"
}



