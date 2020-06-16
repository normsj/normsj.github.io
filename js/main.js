$(document).ready(function(){
    //SET MPOP URLS
    var wsitem = $("#my-works-slider .item");
    for(i=0;i<wsitem.length;i++){
        $(wsitem[i]).attr('href', $(wsitem[i]).find("img").attr('src') + "");
    }
    
    $(".wrap").addClass("animated");

    $("#my-background-slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        prevArrow : $(".my-background .left-slide"),
        nextArrow : $(".my-background .right-slide"),
        responsive : [
            {
                breakpoint: 999,
                settings :{
                    slidesToShow : 2
                }
            },
            {
                breakpoint: 480,
                settings : {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Flag to disable opening while dragging - "true" means MFP is allowed to open up.
    var mfpOpen = true;  

    $("#my-works-slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:4,
        prevArrow : $(".my-works .left-slide"),
        nextArrow : $(".my-works .right-slide"),
        responsive : [
            {
                breakpoint: 999,
                settings :{
                    slidesToShow : 2,
                    slidesToScroll : 2
                }
            },
            {
                breakpoint: 480,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Set the flag using slick’s events  
    $('#my-works-slider').on('beforeChange', function(){
    mfpOpen = false;    
    });  

    $('#my-works-slider').on('afterChange', function(){    
    mfpOpen = true;        
    });  

    //SET MAG POP
    $(wsitem).magnificPopup({
        type: 'image',
        disableOn: function() {
            return mfpOpen;
        }, 
        gallery: {enabled: true}
    });  

    //section clicks
    $(".who").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".overview").offset().top
        }, 400);
    });
    $(".bak").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".my-background").offset().top
        }, 400);
    });
    $(".wor").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".my-works").offset().top
        }, 400);
    });
    //dropdown click
    $(".drop").click(function(){
        if(!($(this).next("ul").hasClass("active"))) {
            $(this).next('ul').slideDown(400);
        } else {
            $(this).next('ul').slideUp(400);
        }
        $(this).next('ul').toggleClass("active");
    })
});

var scrollstate = 0;
$(window).scroll(function(){
    if(window.pageYOffset > 0 && window.pageYOffset < $(".my-background").offset().top) {
        RemoveAll();
        if(!($('.who').hasClass("active"))) {
            $(".who").addClass("active");
        }
    } else if (window.pageYOffset > $('.my-background').offset().top && window.pageYOffset < $(".my-works").offset().top) {
        RemoveAll();
        if(!($('.bak').hasClass("active"))) {
            $(".bak").addClass("active");
        }
    } else if (window.pageYOffset > $('.my-works').offset().top) {
        RemoveAll();
        if(!($('.wor').hasClass("active"))) {
            $(".wor").addClass("active");
        }
    }
});

function RemoveAll(){
    $(".who").removeClass("active");
    $(".bak").removeClass("active");
    $(".wor").removeClass("active");
}