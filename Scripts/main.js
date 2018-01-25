//Change opacity of hompage sections
$(document).ready(function () {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var phrase = "© " + year + " LivProactiv, Inc.";
    console.log(phrase);
    $(".copyright").text(phrase);
});


$('#item1').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});
$('#item2').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});
$('#item3').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});
$('#item4').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

$('#item1').mouseover(function () {
    $('#item_bg1').attr("style", "opacity:0.6")
});

$('#item1').mouseout(function () {
    $('#item_bg1').attr("style", "opacity:1")
});

$('#item2').mouseover(function () {
    $('#item_bg2').attr("style", "opacity:0.6")
});

$('#item2').mouseout(function () {
    $('#item_bg2').attr("style", "opacity:1")
});

$('#item3').mouseover(function () {
    $('#item_bg3').attr("style", "opacity:0.6")
});

$('#item3').mouseout(function () {
    $('#item_bg3').attr("style", "opacity:1")
});

$('#item4').mouseover(function () {
    $('#item_bg4').attr("style", "opacity:0.6")
});

$('#item4').mouseout(function () {
    $('#item_bg4').attr("style", "opacity:1")
});

//nav scroll
/*$(document).ready(function () {

    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).width() < 768) {
        }
        else {
            if ($(window).scrollTop() > 295) {
                $('#header').addClass('navbar-fixed-top');
                $('#header').removeClass('navbar-static-top');
                $('#nav-image').attr('src', '/Images/icon.png');
                $('#nav-image').attr("style", "padding-bottom: 25px;padding-top: 25px;max-width: 5.5%;height: auto;width: auto;");
                $('#bs-example-navbar-collapse-1').attr("style", "padding-bottom: 25px;position:absolute;bottom:0;right:0; z-index:10;");
                $('#header').attr("style", "border-top:none; border-bottom:none; background-color:rgba(255, 255, 255, 0.8);");
                $('#sb-site').attr("style", "padding-top:136px");
                $('#mobile-nav').attr("style", "background-color:transparent;");
            }
            if ($(window).scrollTop() < 296) {
                if ($(window).width() >= 768 && $(window).width() < 990) {
                    $('#header').removeClass('navbar-fixed-top');
                    $('#header').addClass('navbar-static-top');
                    $('#header').attr("style", "border-top:none; border-bottom:none; background-color:#fff");
                    $('#sb-site').attr("style", "");
                    $('#mobile-nav').attr("style", "background-color:white;");

                }
                else {
                    $('#header').removeClass('navbar-fixed-top');
                    $('#header').addClass('navbar-static-top');
                    $('#nav-image').attr('src', '/Images/Liv_Proactive_logo_V3.jpg');
                    $('#nav-image').attr("style", "max-width: 30%;padding-bottom: 10px;padding-top: 10px;height: auto;width: auto;");
                    $('#bs-example-navbar-collapse-1').attr("style", "padding-bottom: 0px;position:absolute;bottom:0;right:0; z-index:10;background-color:#fff;");
                    $('#header').attr("style", "border-top:none; border-bottom:none; background-color:#fff");
                    $('#sb-site').attr("style", "");
                    $('#mobile-nav').attr("style", "background-color:white;");

                }
            }
        }
    });
});*/


//collapse mobile nav properly 
$(document).ready(function () {
    var win = $(window);
    if (win.width() >= 768) {
        $("#bs-example-navbar-collapse-mobile").attr("style", "display: none !important;background-image:none;background-color:transparent;");
        $("#header-image").attr("style", "display: block; margin:0px;width: 880px;");
        $(".home-br").removeClass('mobile-br');
    }
    if (win.width() < 768) {
        $("#header-image").attr("style", "display: none !important");
        $(".home-br").addClass('mobile-br');
    }
    if (win.width() <= 990) {
        $('#nav-image').attr('src', '/Images/icon.png');
        $('#nav-image').attr("style", "padding-bottom: 25px;padding-top: 25px;max-width: 5.5%;height: auto;width: auto;");
        $('#bs-example-navbar-collapse-1').attr("style", "padding-bottom: 25px;position:absolute;bottom:0;right:0; z-index:10;");

    }
    if (win.width() > 990) {
        $('#header').removeClass('navbar-fixed-top');
        $('#header').addClass('navbar-static-top');
        $('#nav-image').attr('src', '/Images/Liv_Proactive_logo_V3.jpg');
        $('#nav-image').attr("style", "max-width: 30%;padding-bottom: 10px;padding-top: 10px;height: auto;width: auto;");
        $('#bs-example-navbar-collapse-1').attr("style", "padding-bottom: 0px;position:absolute;bottom:0;right:0; z-index:10;background-color:#fff;");
    }

});

$(window).on('resize', function () {
    var win = $(this); //this = window
    if (win.width() >= 768) {
        $("#bs-example-navbar-collapse-mobile").attr("style", "display: none !important");
        $("#header-image").attr("style", "display: block; margin:0px;width: 880px;");
        $(".home-br").removeClass('mobile-br');
    }
    if (win.width() < 768) {
        $("#header-image").attr("style", "display: none !important");
        $("#home-br").addClass('mobile-br');
    }
    if (win.width() <= 990) {
        $('#nav-image').attr('src', '/Images/icon.png');
        $('#nav-image').attr("style", "padding-bottom: 25px;padding-top: 25px;max-width: 5.5%;height: auto;width: auto;");
        $('#bs-example-navbar-collapse-1').attr("style", "padding-bottom: 25px;position:absolute;bottom:0;right:0; z-index:10;");
    }
    if (win.width() > 990) {
        $('#header').removeClass('navbar-fixed-top');
        $('#header').addClass('navbar-static-top');
        $('#nav-image').attr('src', '/Images/Liv_Proactive_logo_V3.jpg');
        $('#nav-image').attr("style", "max-width: 30%;padding-bottom: 10px;padding-top: 10px;height: auto;width: auto;");
        $('#bs-example-navbar-collapse-1').attr("style", "padding-bottom: 0px;position:absolute;bottom:0;right:0; z-index:10;background-color:#fff;");
    }
});

$(document).ready(function () {
    $('.navbar-toggle').on('click', function () {
        if ($('#bs-example-navbar-collapse-mobile').is(':visible')) {
            $("#bs-example-navbar-collapse-mobile").hide();
        } else {
            $("#bs-example-navbar-collapse-mobile").show();
        };
    });
});


//Team members pictures are clickable 

$(document).ready(function () {
    $(".image_aurel").on('click', function () {
        if ($('#team_member_aurel').is(':visible')) {
            $('#team_member_aurel').hide();
            $('#team_member_andrew').hide();
        }
        else {
            $('#team_member_aurel').show();
            $('#team_member_andrew').hide();
        };
    });
});


$(document).ready(function () {
    $(".image_andrew").on('click', function () {
        if ($('#team_member_andrew').is(':visible')) {
            $('#team_member_andrew').hide();
            $('#team_member_aurel').hide();
        }
        else {
            $('#team_member_andrew').show();
            $('#team_member_aurel').hide();
        };
    });
});



//swap phone images on hover

/*$(document).ready(function () {
    $('#homepage-image').hover(function () {
        $('#homepage-image').attr('src', '/Images/IPhone6_black_front_temp.png')
    },
    function () {
        $('#homepage-image').attr('src', '/Images/IPhone6_black_front_temp.png')
    })
});*/