$(function () {

    // visual slider
    let visualSlider = $(".visualSlider");
    if (visualSlider.length) {
        visualSlider.slick({
            fade: true,
            slidesToShow : 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            infinite: true,
            draggable: true,
            pauseOnHover: false,
            arrows: true,
            prevArrow: $(".visualArrow .prev"),
            nextArrow: $(".visualArrow .next"),
            dots: true,
            customPaging: function (slick, index) {
                $(".visualSliderControl .nums > span").html((slick.slideCount));
                $(".visualSliderControl .bar span").css({
                    width: (100 / slick.slideCount) + "%"
                });
            }
        }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            let i = (nextSlide ? nextSlide : 0) + 1;
            $(".visualSliderControl .nums strong").html((i));
            $(".visualSliderControl .bar span").css({
                width: ((100 / slick.slideCount) * (nextSlide + 1)) + "%"
            });
        });
    }

    // product Slider01
    let productsSlider01 = $(".productsSlider01");
    if (productsSlider01.length) {
        productsSlider01.slick({
            slidesToShow : 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            infinite: true,
            draggable: true,
            arrows: true,
            dots: false,
            pauseOnHover: false,
            adaptiveHeight: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }]
        });
    }
    
    // product Slider02
    let productsSlider02 = $(".productsSlider02");
    if (productsSlider02.length) {
        productsSlider02.slick({
            slidesToShow : 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            infinite: true,
            draggable: true,
            arrows: true,
            dots: false,
            pauseOnHover: false,
            adaptiveHeight: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }]
        });
    }

    // product Slider03
    let productsSlider03 = $(".productsSlider03");
    if (productsSlider03.length) {
        productsSlider03.slick({
            slidesToShow : 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            infinite: true,
            draggable: true,
            arrows: true,
            dots: false,
            pauseOnHover: false,
            adaptiveHeight: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }]
        });
    }

    // recommend Slider
    let recommendSlider = $(".recommendSlider");
    if (recommendSlider.length) {
        recommendSlider.slick({
            slidesToShow : 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            infinite: true,
            draggable: true,
            arrows: true,
            dots: true,
            pauseOnHover: false,
            adaptiveHeight: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    arrows: false
                }
            }]
        });
    }
    
});