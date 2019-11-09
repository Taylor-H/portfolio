$(document).ready(function() {
  $('.post-wrapper').slick({
    slide: '.post',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000,
    appendDots:'.post-wrapper .slider-nav',
    responsive: [
{
  breakpoint: 800,
  settings: {
  slide: '.post',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  dots: true,
  autoplay: true,
  autoplaySpeed: 100000,
  appendDots:'.post-wrapper .slider-nav',
  slidesToShow: 1,
  slidesToScroll: 1
  }
}
 ]
  });
  $('.project-details').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   arrows: false,
   adaptiveHeight: true,
   asNavFor: '.post-wrapper2'
  });
  $('.post-wrapper2').slick({
   asNavFor: '.project-details',
   prevArrow: $('.prev'),
   nextArrow: $('.next'),
   dots: true,
   slidesToShow: 5,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 100000,
   appendDots:'.post-nav',
   focusOnSelect: true,
   centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 820,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
      },
      {
        breakpoint: 615,
        settings: {
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
  ]
});
});
