$(function () {

    // gnb
    $(document).on("mouseenter focus", "#gnb > ul > li > a", function () {
        $(this).parent("li").addClass("active").siblings("li").removeClass("active");
        return false;
    }).on("mouseleave", "#gnb", function () {
        $("#gnb > ul > li").removeClass("active");
        return false;
    }).on("click", ".btnGnbOpen", function () {
        $("#gnb").addClass("open");
        $("#gnb > ul > li").removeClass("on");
        $("#gnb > ul > li > ul").slideUp();
        return false;
    }).on("click", ".btnGnbClose", function () {
        $("#gnb").removeClass("open");
        return false;
    }).on("click", "#gnb > ul > li > a", function () {
        $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
        $("#gnb > ul > li").each(function () {
            let onCheck = $(this).is(".on");
            if (onCheck) {
                $(this).children("ul").slideDown();
            } else {
                $(this).children("ul").slideUp();
            }
        });
        return false;
    });

    // footer slider
    let footerSlider = $(".footerSlider");
    if (footerSlider.length) {
        footerSlider.slick({
            slidesToShow : 3,
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
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    // popup tab
    $(".popupTabNav .on a").each(function () {
        var opt = $(this).attr("href");
        if (opt !== "#" && opt !== "#;" && opt.charAt(0) === "#") {
            $(opt + ".popupTabDetails").css("display", "block");
        }
    });

    $(".popupTabNav a").on("click", function (e) {
        var opt = $(this).attr("href");
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");

        if (opt === "#" || opt === "" || opt === "#;") {
            e.preventDefault();
        } else if (opt.charAt(0) === "#") {
            if ($(opt).hasClass("popupTabDetails")) {
                $(opt).show().siblings(".popupTabDetails").hide();
                e.preventDefault();
            }
        }
    });
});

// popup
function popupOpen(openTarget) {
    $(openTarget).addClass("show");
}
function popupClose(closeTarget) {
    $(closeTarget).removeClass("show");
}