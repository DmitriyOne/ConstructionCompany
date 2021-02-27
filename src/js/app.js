// import './import/swiper';
import './import/ui';
// import objectFitImages from 'object-fit-images';

$(document).ready(function() {
  $('.header__burger').click(function(e) {
    $('.header__burger, .header__menu, .wrap, .callOur__nav ').toggleClass('active');
    if ($('.callOur__nav') === true) {
      dis;
    }
  });
});



//show popup
$('.btn__call input').click(function(event) {
  event.preventDefault();
  show();
});
$('.contact__header input').click(function(event) {
  event.preventDefault();
  show();
});

$('.popup__bg').click(function(event) {
  event.preventDefault();
  hide();
});



function show() {
  $('.popup').fadeIn(300);
  $('.popup__bg').fadeIn(300);
}

function hide() {
  $('.popup').fadeOut(300);
  $('.popup__bg').fadeOut(300);
}





// objectFitImages();
