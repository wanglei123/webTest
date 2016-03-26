$(document).ready(function() {

    /*顶部菜单效果*/
    $(".navbox,.nav-list").mouseover(function() {
        $(".nav-list").css("display", "block")
    }).mouseout(function() {
        $(".nav-list").css("display", "none")
    })


    $(".navbox a:not(:first),.navitem").each(function(index) {

        $(this).mouseover(function() {
            $(".nav-item:not(index)").css("background", "rgba(255,255,255,.97)")
            $(".angle").css("display", "none")
            $(".nav-item").eq(index).css("background-color", "#F7F7F7")
            $(".angle").eq(index).css("display", "block")
        }).mouseout(function() {
            $(".nav-item").eq(index).css("background-color", "none")
                // $(".angle").eq(index).css("display","none")
        })

    })

    /****左侧分类菜单*******/

    $(".classify-list").each(function(index) {
        $(this).mouseover(function() {
            $(".list-show").eq(index).css("display", "block");
            $(".classify-list").eq(index).removeClass("classify-hover");
            $(".classify-list").eq(index).addClass("classify-hover");

        })
        $(this).mouseout(function() {
            $(".list-show").eq(index).css("display", "none");
            $(".classify-list").removeClass("classify-hover");

        })

    })


    /***************************轮播图***************************************/
    function Scroll(obj, speed, interval) { //父级容器，轮播速度，切换间隔
        $("." + obj).each(function() {
            var $box = $(this),
                $imgUl = $box.children(".imgList"),
                $imgLi = $imgUl.children("li"),
                $btnUl = $box.children(".btnList"),
                $btnLi = $btnUl.children("li"),
                $btnPreNex = $box.children(".pre-nex"),
                $btnPre = $box.children(".prev"),
                $btnNex = $box.children(".next"),
                n = $imgLi.length,
                width = $imgLi.width(),
                left = parseFloat($imgUl.css("left")),
                k = 0,
                Player;
            $imgUl.css("width", n * width);

            function scroll() { //轮播事件
                $imgUl.stop().animate({
                    left: -width
                }, speed, function() {
                    k += 1;
                    $imgUl.css("left", 0);
                    $imgUl.children("li:first").appendTo($(this));
                    $btnLi.removeClass('cur');
                    if (k >= n) {
                        k = 0;
                    }
                    $btnUl.children("li").eq(k).addClass('cur');
                });
            }

            $btnLi.click(function() { //小圆点点击事件
                var index = $btnLi.index(this);
                $(this).addClass('cur').siblings("li").removeClass('cur');
                if (index >= k) {
                    var dif = index - k;
                    left = -dif * width;
                    $imgUl.stop().animate({
                        left: left
                    }, speed, function() {
                        $imgUl.css("left", 0);
                        $imgUl.children("li:lt(" + dif + ")").appendTo($imgUl);
                    });
                } else {
                    var j = n - (k - index);
                    $imgUl.css("left", (index - k) * width);
                    $imgUl.children("li:lt(" + j + ")").appendTo($imgUl);
                    $imgUl.stop().animate({
                        left: 0
                    }, speed);
                }
                k = index;
            });

            $btnPreNex.click(function() { //左右按钮点击事件
                var index = $btnLi.index(this);
                if ($(this).hasClass('next')) {
                    if (!$imgUl.is(":animated")) {
                        k += 1;
                        $imgUl.animate({
                            left: -width
                        }, speed, function() {
                            $imgUl.css("left", 0);
                            $imgUl.children("li:first").appendTo($(this));
                            if (k >= n) {
                                k = 0;
                            }
                            $btnUl.children("li").removeClass('cur').eq(k).addClass('cur');
                        });
                    }
                } else {
                    if (!$imgUl.is(":animated")) {
                        k += -1;
                        $imgUl.css("left", -width);
                        $imgUl.children("li:last").prependTo($imgUl);
                        $imgUl.stop().animate({
                            left: 0
                        }, speed);
                        if (k < 0) {
                            k = n - 1;
                        }
                        $btnUl.children("li").removeClass('cur').eq(k).addClass('cur');
                    }
                }
            });
            $box.hover(function() { //鼠标移入、移出事件
                clearInterval(Player);
                $btnPreNex.addClass('show');
            }, function() {
                Player = setInterval(function() {
                    scroll()
                }, interval);
                $btnPreNex.removeClass('show');
            });
            Player = setInterval(function() {
                scroll()
            }, interval);
        });
    }
    $(function() { //读取轮播事件
        Scroll("bannerCon", 1000, 3000);
    });

/*轮播图结束*/


$(".news ul li a:first").css("color", "red");


/*右侧 recommend-list*/
    var span_a = $(".recommend ul li:gt(3)").find("a");
    span_a.each(function() {
        if ($(this).children(".download")) {

            $(this).hover(function() {
                $(this).children(".download").css("background-position", "-42px -117px");
            },function() {
                $(this).children(".download").css("background-position", "-5px -117px");
            });
        }

        if ($(this).children(".know")) {
            $(this).hover(function() {
                $(this).children(".know").css("background-position", "-42px -144px")
            },function() {
                $(this).children(".know").css("background-position", "-5px -144px");
            });
        }

        if ($(this).children(".occupation")) {
            $(this).hover(function() {
                $(this).children(".occupation").css("background-position", "-42px -173px")
            },function() {
                $(this).children(".occupation").css("background-position", "-5px -173px");
            });
        }
        if ($(this).children(".vip")) {
            $(this).hover(function() {
                $(this).children(".vip").css("background-position", "-42px -202px")
            },function() {
                $(this).children(".vip").css("background-position", "-5px -202px");
            });
        }

    })

/*右侧recommend-list end*/


/*右侧tab*/
    var list = $(".recommend .first-ul li:lt(4)");
    var list_size = list.size();

            list.each(function(index) {
            $(this).hover(function() {
                $(".recommend .first-ul").hide();
                $(".recommend .move-list").show();
                $(".type-list li").eq(index).css("color","#35b558").siblings().css("color","#000");
            });
    });

            $(".type-list li").each(function(index) {
                $(this).hover(function() {
                $(this).css("color","#35b558").siblings().css("color","#000");
                $(".content-list").eq(index).addClass("current").siblings().removeClass("current");
            },function(){
                $(".recommend .first-ul").show();
                $(".recommend .move-list").hide();
            });
    });

/*右侧tab end*/


/*课程直播tab*/
var timeoutid ;
    $(".livebox-week-day").each(function(index) {
        $(this).mouseover(function() {
            timeoutid = setTimeout(function() {
                $(".livebox-week-day").removeClass("live-curr");
                $(".livebox-week-day").eq(index).addClass("live-curr");
                $(".livebox-lession-list").removeClass("list-curr");
                $(".livebox-lession-list").eq(index).addClass("list-curr");
            },300);
        }).mouseout(function(){
            clearTimeout(timeoutid);
        });
    });

/*课程直播tab 结束*/

});
