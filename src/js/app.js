
// бургер
$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__menu, .wrap, .callOur__nav ').toggleClass('active');


    if ($('.header__burger').hasClass('active')) {
      $('body').addClass('fixedPosition');
    }
    else {
      $('body').removeClass('fixedPosition');
    }
  });
});


$('.header__link').click(function() {
  $('.header__burger, .header__menu, .wrap, .callOur__nav ').removeClass('active');
  $('body').removeClass('fixedPosition');
});




// попапы
$('.btn__call input').click(function(event) {
  event.preventDefault();
  show();
});
$('.contact__header input').click(function(event) {
  event.preventDefault();
  show();
});
$('.header__body input').click(function(event) {
  event.preventDefault();
  show();
});

$('.popup__bg').click(function(event) {
  event.preventDefault();
  hide();
});



// функции для попапов
// открытие
function show() {
  $('.popup').fadeIn(300);
  $('.popup__bg').fadeIn(300);
}
// закрытие
function hide() {
  $('.popup').fadeOut(300);
  $('.popup__bg').fadeOut(300);
}


// слайдер
const swiper = new Swiper('.swiper-container', {
  // стрелочки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 700,
});

// плавный скролинг
var $page = $('html, body');
$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 2000);
  return false;
});



