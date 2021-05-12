/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const $ = require("jquery")
export const onClientEntry = () => {
    window.onload = () => {
        var carousel = $('.card-carousel-wrapper');
        var carouselControl = '<button style="height:40px;width:40px;right: 0;left: 0;margin: auto; top: 35%;" class="font-reading d-none z-3 position-absolute carousel-controls mx-3 mx-xl-n3 px-0 rounded-circle border back">←</button>' +
            '<button style="height:40px;width:40px; right: 0;/* left: 0; */margin: auto; top: 35%;" class="font-reading  z-3 position-absolute carousel-controls mx-3 mx-xl-n3 px-0 rounded-circle next ml-auto border float-right">→</button>' +
            '<div class="indicators text-center mx-auto py-5 d-none d-md-block "></div>' +
            '</div>';

        $(carousel).each(function() {
            $(this).wrap("<div id='carousel' class='container-lg mx-auto px-0 position-relative'></div>");

            var carouselItems = $(this).children("div");
            var thecarousel = $(this);
            var i;

            if (carouselItems.length > 1) {
                $(this).after(carouselControl);
                for (i = 0; i < carouselItems.length; i = i + 1) {
                    $(thecarousel).siblings(".indicators").append('<span class="carousel-indicator d-none d-md-inline-flex"></span>');
                }
                $(thecarousel).siblings(".indicators").children(".carousel-indicator:first-child").addClass('active');
            }

            var width1 = $(this)[0].offsetWidth;
            var next = $(this).siblings('.next');
            var back = $(this).siblings('.back');

            console.log(width1);


            $(next).click(function() {
                if ($(thecarousel).siblings(".indicators").children(".carousel-indicator:first-child").hasClass('active')) {
                    $(back).removeClass('d-none');
                }
                $(thecarousel).siblings(".indicators").children(".carousel-indicator.active").next().addClass('active').prev().removeClass('active');
                /* $(thecarousel).siblings(".indicators").children("carousel-indicator.active").prev().removeClass('active'); */
                if ($(thecarousel).siblings(".indicators").children(".carousel-indicator:last-child").hasClass('active')) {
                    $(this).addClass('d-none');
                } else { $(this).removeClass('d-none'); }
                $(thecarousel).animate({ scrollLeft: '+=' + width1 }, 500);
            });

            $(back).click(function() {
                if ($(thecarousel).siblings(".indicators").children(".carousel-indicator:last-child").hasClass('active')) {
                    $(next).removeClass('d-none');
                }
                $(thecarousel).siblings(".indicators").children(".carousel-indicator.active").prev().addClass('active').next().removeClass('active');

                if ($(thecarousel).siblings(".indicators").children("span:first-child").hasClass('active')) {
                    $(this).addClass('d-none');
                } else { $(this).removeClass('d-none'); }
                $(thecarousel).animate({ scrollLeft: '-=' + width1 }, 500);
            });

            setTimeout(function() {

                var maxHeight = 0;
                $(carouselItems).each(function() {
                    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
                });
                $(carouselItems).height(maxHeight);
            }, 300);
        });
    }

}