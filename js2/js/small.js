$(document).ready(function() { //父级容器，轮播速度，切换间隔
    $(".small-bannerCon").each(function() {
        var $box = $(this),
            $imgUl = $box.children(".small-imgList"),
            $imgLi = $imgUl.children("li"),
            $btnPreNex = $box.children(".small-pre-nex"),
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
            }, 200, function() {
                k += 1;
                $imgUl.css("left", 0);
                $imgUl.children("li:first").appendTo($(this));
                if (k >= n) {
                    k = 0;
                }

            });
        }

        $btnPreNex.click(function() { //左右按钮点击事件
            if ($(this).hasClass('next')) {
                if (!$imgUl.is(":animated")) {
                    k += 1;
                    $imgUl.animate({
                        left: -width
                    }, 200, function() {
                        $imgUl.css("left", 0);
                        $imgUl.children("li:first").appendTo($(this));
                        if (k >= n) {
                            k = 0;
                        }

                    });
                }
            } else {
                if (!$imgUl.is(":animated")) {
                    k += -1;
                    $imgUl.css("left", -width);
                    $imgUl.children("li:last").prependTo($imgUl);
                    $imgUl.stop().animate({
                        left: 0
                    }, 200);
                    if (k < 0) {
                        k = n - 1;
                    }

                }
            }
        });


        //鼠标移入、移出事件
        $box.hover(function() { 
            $btnPreNex.addClass('show');
        }, function() {
            $btnPreNex.removeClass('show');
        });




    });
})
