$(function() {
    $('.bannerSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        arrows: true,
        prevArrow: '.prevArrow',
        nextArrow: '.nextArrow',
        dots: true,

    });
});