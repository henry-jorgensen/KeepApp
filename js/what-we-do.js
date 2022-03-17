const header = document.querySelector('.header');
const description = document.querySelector('.description');
header.classList.remove('transition-header');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('transition-header');
      description.classList.add('transition-description');
      triggerAnimation();
      return;
    }
    header.classList.remove('transition-header');
    description.classList.remove('transition-description');
    reverseAnimation();
  });
});

observer.observe(document.querySelector('.wwd-text'));