// TOP
let scrollToTop = () => {
    $("html, body").animate({scrollTop:0}, 500);
    return false;
}

$(function () {

    // quick Bar
    let quickBar = document.querySelector(".quickBar"),
        heightValue = 30;

    if (document.querySelector(".quickBar")) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > heightValue) {
                quickBar.classList.add("show");
            } else {
                quickBar.classList.remove("show");
            }
        });
    }

    // 최근 본 상품 fix
    let recentWrap = $(".recentWrap");
    if (recentWrap.length) {
        let btnRecentOpen = $(".btnRecentOpen");
        btnRecentOpen.click(function(){
            recentWrap.toggleClass("open");
        });
        if($(".recentItem").length > 5) {
            let recentSlider = $(".recentSlider");
            recentSlider.slick({
                slidesToShow : 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 800,
                infinite: false,
                draggable: true,
                arrows: true,
                dots: false,
                pauseOnHover: false,
                adaptiveHeight: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        
                    }
                }]
            });
        }
    }

    // Thumb Slider
    let ThumbSlider = $(".ThumbSlider");
    if (ThumbSlider.length) {
        ThumbSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 700,
            adaptiveHeight: true,
            dots: true,
            appendDots: ".ThumbSliderNav",
            infinite: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            arrows: true,
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data("thumb");
                return '<div class="thumb"><img src="'+thumb+'"></div>';
            } 
        });

    }

    // 상세 탭
    $(".productsDetailsNav .on a").each(function () {
        var opt = $(this).attr("href");
        if (opt !== "#" && opt !== "#;" && opt.charAt(0) === "#") {
            $(opt + ".productsDetails").css("display", "block");
        }
    });

    $(".productsDetailsNav a").on("click", function (e) {
        var opt = $(this).attr("href");
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");

        if (opt === "#" || opt === "" || opt === "#;") {
            e.preventDefault();
        } else if (opt.charAt(0) === "#") {
            if ($(opt).hasClass("productsDetails")) {
                $(opt).show().siblings(".productsDetails").hide();
                e.preventDefault();
            }
        }
    });

    // calender on
    $(".calenderTableSm a").click(function(){
        $(this).parent("td").toggleClass("on");
    });
    $(".calenderTableLg a").click(function(){
        $(".calenderTableLg").find("td").removeClass("on");
        $(this).parent("td").toggleClass("on");
    });

    // select box
    $(".btnSelect").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active").attr("title","하위메뉴열기");
            $(this).next().stop().slideUp();
        }else{
            $(this).addClass("active").attr("title","하위메뉴닫기");
            $(this).next().stop().slideDown();
        }
    });
    $(".selectList li a").on("click", function(e){
        e.preventDefault();
        var snbText = $(this).text();
        var snbCode = $(this).data("code");
        $(this).parent().parent().siblings(".btnSelect").text(snbText);
        $(this).parent().parent().siblings(".btnSelect").data({"code": snbCode});
        $(this).parents("li").addClass("on").siblings("li").removeClass("on");
        $(this).parent().parent().siblings(".btnSelect").removeClass("active").attr("title","하위메뉴열기");
        $(this).parent().parent().stop().slideUp();
        $(this).closest(".selectBox").find(".btnSelect").change();
    });
    
    // 모바일 검색
    let mSearchForm = $(".mSearchForm");
    if (mSearchForm.length) {
        mSearchForm.find("input").on("focus",function(){
            $(".dateForm").addClass("show");
        });
        $(document).on("mouseup", function(e){
            let productsListWrap = $(".productsListWrap");
            if(productsListWrap.has(e.target).length === 0){
                $(".dateForm").removeClass("show");
            }
        });
    }

    // FAQ
    $(".faqTitle button").on("click", function(){
        $(this).parent().parent().hasClass("open") ? $(this).attr("title", "質問の回答を開きます") : $(this).attr("title", "質問に答える");
        $(this).parent().parent().toggleClass("open").children(".faqText").stop().slideToggle();
        return false;
    });

    // Reservation time
    $(".timeList button").on("click", function(){
        $(this).toggleClass("on").siblings("button").removeClass("on");
        return false;
    });
});
