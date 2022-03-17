const meetTeam = document.querySelector('.meet-team');
const teamHeader = document.querySelector('.team-header');
const teamImg = document.getElementById('team-img');
const teamh1 = document.querySelector('.team-h1');

teamHeader.classList.remove('transition-team-header');

const teamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() =>{
            meetTeam.classList.add('meet-team-transition');
            teamImg.src = "assets/about/Brain-White.png"
            teamHeader.classList.add('transition-team-header');
            teamh1.classList.add('transition-h1');
            teamh1.innerHTML = "Meet our Team"
        }, 1400);
        
        return;
      }
      meetTeam.classList.remove('meet-team-transition');
      teamHeader.classList.remove('transition-team-header');
      teamh1.classList.remove('transition-h1');
      teamImg.src = "assets/about/Brain-Dark.png"
      teamh1.innerHTML = "Brains at Work"

    });
  });
  
teamObserver.observe(document.querySelector('.meet-team'));