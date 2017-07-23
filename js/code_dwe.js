var $myWindow = $(window);
var $myHeader = $("header");
var headerFlag = false;
$myWindow.on('scroll', function() {

    if(!headerFlag && $myHeader.hasClass("smaller") && $myWindow.scrollTop()<275) {
            $myHeader.removeClass("smaller");
            $myHeader.height($myWindow.height());
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