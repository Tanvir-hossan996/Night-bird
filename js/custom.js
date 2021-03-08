$(document).ready(function () {

    // Gallery parallex code

    $('.gallery-banner').parallax({
        imageSrc: "../img/gallery-banner.jpg",
    });


    //    gallery click code


    $(".gallery-bg .gallery .gallery-list ul li").click(function () {


        $(this).addClass("active").siblings().removeClass("active");


    });


    //    mixitup code


    var mixer = mixitup('.gallery-content');


    //    slick slider code


    $(".bird-slider").slick({

        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        centerMode: true,
        centerPadding: "0",
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    })


    //    fixed-nav bar code


    $(window).scroll(function () {


        var scrolling = $(this).scrollTop();


        if (scrolling > 350) {

            $(".menu-bg").addClass("fixed-nav");

        } else {

            $(".menu-bg").removeClass("fixed-nav");

        };


        if (scrolling > 470) {


            $(".scroll-btn").fadeIn(1000)

        } else {


            $(".scroll-btn").fadeOut(1000)

        }


    });


    //    scroll-bg


    $(".scroll-btn").click(function () {

        $("html,body").animate({

            scrollTop: "0"

        }, 1700)


    });


    //    event parallax code

    $(".event-bg").parallax({


        imageSrc: "../img/event-banner.jpg",

    });



    //    count-down timer

        const cd = new Date().getFullYear() + 1;
        $('.countdown').countdown({
            year: cd,
            day: -280,
            hour: 3,
    
        });


    //    event slick slider


    $(".event-slider").slick({

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    });



    //    blog slick slider 


    $(".blog-slider").slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        centerMode: true,
        centerPadding: "0",
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    });





    //    testi slick slider

    $(".testi-slider").slick({

        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",

    });


    //    plan slick slider

    $(".plan-slider").slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        centerMode: true,
        centerPadding: "0",
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",

    });








});
