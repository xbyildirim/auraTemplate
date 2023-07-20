//Swiper type1
var swiper = new Swiper(".swipType1", {
    slidesPerView: 4,
    spaceBetween: 0,
});

var swipPrdct1 = new Swiper(".swipPrdct1",{
    slidesPerView: 4,
    spaceBetween: 0,
    loop:false,
    autoplay: {
        delay: 1000,
      },
});
$('.prListGrid').on('mouseenter', function(e){
    swipPrdct1.autoplay.stop();
})
$('.prListGrid').on('mouseleave', function(e){    
    swipPrdct1.autoplay.start();
});

var swipPrdct2 = new Swiper(".swipPrdct2", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
      },
})