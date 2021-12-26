$(function(){

    $('.slider_inner, .news_slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });
    $('select').styler();
    $('.header_btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    $('').styler();
});

  // Initialise Carousel
const newsCarousel = new Carousel(document.querySelector("#newsCarousel"), {
    infinite: false,
    Dots: false,
    friction: 0.89,
    slidesToSlide: 2,
    fill: false,
  });
