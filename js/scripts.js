$(document).ready(function() {
  $('.post-wrapper').slick({
    slide: '.post',
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    refresh: true,
    autoplaySpeed: 10000
  });

//   $('.project-details').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    fade: true,
//    arrows: false,
//    autoplay: false,
//    refresh: true,
//    adaptiveHeight: true
//   });
//   $('.post-wrapper2').slick({
//    prevArrow: $('.prev'),
//    nextArrow: $('.next'),
//    dots: false,
//    slidesToScroll: 1,
//    autoplay: false,
//    focusOnSelect: true,
//    rows: 3,
//    slidesPerRow: 3
// });

$('#mailto').attr('href','mailto:taylor@htmlartist.net');
});

// responsive: [
//   {
//     breakpoint: 1100,
//     settings: {
//       refresh:true,
//       centerMode: true,
//       centerPadding: '30px',
//       slidesToShow: 3
//     }
//   },
//   {
//     breakpoint: 820,
//     settings: {
//       centerMode: true,
//       centerPadding: '0px',
//       slidesToShow: 3
//     }
//     },
//     {
//       breakpoint: 615,
//       settings: {
//         centerMode: true,
//         centerPadding: '80px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 440,
//       settings: {
//         centerMode: true,
//         centerPadding: '0px',
//         slidesToShow: 1
//       }
//     }
// ]
