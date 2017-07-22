var $myWindow = $(window);
var $myHeader = $("header");

$myWindow.on('scroll', function() {

    if($myWindow.scrollTop()>75) {
        if(!$myHeader.hasClass("smaller")) {
            $myHeader.addClass("smaller");
            $myHeader.removeAttr("style");
        }
    }else{
        if($myHeader.hasClass("smaller")) {
            $myHeader.removeClass("smaller");
            $myHeader.height($myWindow.height());
        }
    }

});

function init() {
    $myHeader.height($myWindow.height());
}

init();