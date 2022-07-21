const content = document.querySelector('.customer-reviews-content');
const trigger = document.querySelector('.client-animation-trigger');
const phone = document.querySelector('.review-phone');
const phoneText = document.querySelector('.phone-text');
const reviews = document.querySelector('.review-slideshow');
const buttons = document.getElementsByClassName('client-review');

const reviewOwl = document.getElementById('review-carousel');
var clientOwl = $('#review-carousel')
$('.next').click(function(){
  clientOwl.trigger('next.owl.carousel')
})
$('.prev').click(function(){
  clientOwl.trigger('prev.owl.carousel')
})


// Create the observer:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      content.classList.add('customer-reviews-background-change')
      phone.classList.add('review-phone-transform');
      phoneText.classList.add('hide');
      reviewOwl.style.display = 'block';
      
      for (var i = 0; i < buttons.length; i++){
          buttons[i].classList.remove('hide')
      }
      return;
    }
    content.classList.remove('customer-reviews-background-change')
    phone.classList.remove('review-phone-transform');
    phoneText.classList.remove('hide');
    reviewOwl.style.display = 'none';
    for (var i = 0; i < buttons.length; i++){
        buttons[i].classList.add('hide')
    }
  });
});

observer.observe(document.querySelector('.client-animation-trigger'));