/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $secCon = $("#containerSec");
    var $nav = $("#containerSec > #fixed > ul > li");
    var $bar = $("#containerSec > #fixed > ul");
    var $button = $("#toggle");
    var $body = $(".body");
    var $fixed = $("#containerSec > #fixed");

    $button.on("click", function(){
        $bar.toggle();
        if($bar.css("display") === "none"){
            $button.css("opacity", 0.9);
            $fixed.css("border-bottom", "1px solid black");
        } else{
            $button.css("opacity", 0.25);
            $fixed.css("border-bottom", "0");

        }
    });

    var $icons = $(".icons li");

    $icons.on("mouseover", function(){
        $(this).stop(true);
        $(this).animate({
            opacity:1
        }, 300);
    });

    $icons.mouseleave(function(){
        $(this).animate({
            opacity:0.6
        }, 200);
    });

    $("#containerSec > #fixed > ul:not(.icons) > li").on("click", function(){
        $(this).find("ul").toggle();
        $(this).find("li").toggle();

        if($(this).find("ul").css("display") ==="none"){
            $(this).css("opacity", 0.5);
        } else{
            $(this).css('opacity', 1);
        }
    });

    function onResize() {
        var w = $("#head");
        if (w.outerWidth() >= $(window).width()) {
            $("#value").css({
                borderLeft: 0,
                paddingLeft: 0,
                marginRight: "20px"
            });
            w.width += '20px';
            $("#key").css("border-bottom", "1px solid black");
        }
        else{
            $("#value").css({
                borderLeft: "1px solid black",
                paddingLeft: "20px",
                marginRight: 0,
                marginLeft: "20px"
            });
            w.width -= '20px';
            $("#key").css("border-bottom", 0);
        }
    }

    onResize();

    $(window).on("resize", function(){
        onResize();
    });


    /*
    $nav.on("mouseover", function(){
        var i = $(this).index();
        var counter = 0;
        $nav.each(function(){
            if(counter !== i){
                $(this).css("opacity", 0.3);
            }
            counter += 1;
        })
    });

    $nav.mouseleave(function(){
        $nav.each(function(){
            $(this).css("opacity", 1);
        })
    });
    */
    /*
    function spin(item, delayTime){
        var target = 360;
        var start = 0;
        var counter = 2;
        setTimeout(function(){
            var timer = setInterval(function(){
                if (start >= target){
                    clearInterval(timer);
                }
                item.css("transform", "rotate("+start+"deg)");
                start += counter;
            },1);
        },delayTime);
    }
    spin($header,1500);
    */
});

