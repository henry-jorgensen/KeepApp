const header = document.querySelector('.header');
const description = document.querySelector('.description');
header.classList.remove('transition-header');

// Create the observer:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('transition-header');
      description.classList.add('transition-description');
      setTimeout(() => {
        triggerAnimation();
      }, 1500);
      
      return;
    }
    // header.classList.remove('transition-header');
    // description.classList.remove('transition-description');
    // reverseAnimation();
  });
});

observer.observe(document.querySelector('.what-we-do'));