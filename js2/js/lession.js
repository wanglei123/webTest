$(document).ready(function() {
    var timeoutid;
    $(".hot-lession ul li").each(function(index) {
        $(this).mouseover(function() {
            timeoutid = setTimeout(function() {
                $(".one-classify-lession").eq(index).addClass("classify-curr").siblings().removeClass("classify-curr");
                $(".hot-lession ul li").eq(index).addClass("on").siblings().removeClass("on");
            }, 300);
        }).mouseout(function() {
            clearTimeout(timeoutid);
        });
    });

    $(".one-classify-item").each(function(index) {
        $(this).hover(function() {          
                $(".user-action").eq(index).fadeIn();
                $(".lessionplay").eq(index).fadeIn();
                $(".playericon").eq(index).fadeIn();
                $(".textbox").eq(index).animate({height:175});
                $(".lession-intro").eq(index).slideDown(100, function() {
                    $(this).css("display", "block").css("opacity", "1").css("height", "52px");
                    $(".learn-number").eq(index).show();
                    $(".chuji").eq(index).show();
                    $(".lessionbox-icon").eq(index).animate({bottom:-42});
                });
        },function() {
            $(".user-action").eq(index).fadeOut();
            $(".lessionplay").eq(index).fadeOut();
            $(".playericon").eq(index).fadeOut();
            $(".chuji").eq(index).hide();
            $(".learn-number").eq(index).hide();
            $(".lessionbox-icon").eq(index).animate({bottom:-18});
            $(".lession-intro").eq(index).slideUp(300, function() {
                $(this).css("display", "none").css("opacity", "0").css("height", "0px");
            });
            $(".textbox").eq(index).animate({height:88});
            
        });

    });




    $(".one-classify-lession").each(function(index) {
        $(this).find("li").eq(3).css("margin-right", "0");
        $(this).find("li").eq(7).css("margin-right", "0");

    })


});
