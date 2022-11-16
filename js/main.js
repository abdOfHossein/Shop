function changeSlide(elem) {
  const slides = document.querySelectorAll('.item');
  console.log(slides);
  slides.forEach((slide) => {
    $(slide).removeClass('active');
  });
  $(`#${elem}`).addClass('active');
}

$('.slider-btns>i').mouseover(function () {
  $(this).css({
    color: 'gray',
  });
});
$('.slider-btns>i').mouseout(function () {
  $(this).css({
    color: 'white',
  });
});

let index = 1;
setInterval(() => { 
  if (index == 4) index = 1;
  changeSlide(`slide${index}`);
  index++;
}, 4000);
