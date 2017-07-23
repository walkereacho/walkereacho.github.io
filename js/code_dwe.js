var $myWindow = $(window);
var $myHeader = $("header");
var headerFlag = false;

/*
TODOS:
 - Header on click goes back to header
 - If you scroll into header, be able to then scroll out. 

 */
$myWindow.on('scroll', function() {
    if(!headerFlag && $myHeader.hasClass("smaller") && $myWindow.scrollTop()<275) {
            $myHeader.removeClass("smaller");
            $myHeader.height($myWindow.height());
    }else if(!$myHeader.hasClass("smaller") && $myWindow.scrollTop()>275){
        $("#exp_link").click();
    }
});

$("#exp_link").click(function() {
    $myWindow.scrollTop(0);
    removeHeader();
    $('html,body').animate({
        scrollTop: $("#exp_header").offset().top},
        950, 
        "swing",
        function() {
            headerFlag=false;
        });
});

$("#soft_link").click(function() {
    $myWindow.scrollTop(0);
    removeHeader();
    $('html,body').animate({
        scrollTop: $("#soft_header").offset().top},
        950, 
        "swing",
        function() {
            headerFlag=false;
        });
});

$("#contact_link").click(function() {
    $myWindow.scrollTop(0);
    removeHeader();
    $('html,body').animate({
        scrollTop: $("#contact_header").offset().top},
        950, 
        "swing",
        function() {
            headerFlag=false;
        });
});

function removeHeader() {
    if(!$myHeader.hasClass("smaller")) {
        $myHeader.addClass("smaller");
        $myHeader.removeAttr("style");
        headerFlag = true;
    }
}

function init() {
    $myHeader.height($myWindow.height());
}

init();