const content = document.querySelector('.customer-reviews-content');
const trigger = document.querySelector('.client-animation-trigger');
const phone = document.querySelector('.review-phone');
const phoneText = document.querySelector('.phone-text');
const reviews = document.querySelector('.customer-reviews');
const buttons = document.getElementsByClassName('review-button');

// Create the observer:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      content.classList.add('customer-reviews-background-change')
      phone.classList.add('review-phone-transform');
      phoneText.classList.add('hide');
      reviews.classList.remove('hide');
      for (var i = 0; i < buttons.length; i++){
          buttons[i].classList.remove('hide')
      }
      return;
    }
    content.classList.remove('customer-reviews-background-change')
    phone.classList.remove('review-phone-transform');
    phoneText.classList.remove('hide');
    reviews.classList.add('hide');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].classList.add('hide')
    }
  });
});

observer.observe(document.querySelector('.client-animation-trigger'));