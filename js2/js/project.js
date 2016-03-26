$(document).ready(function() {
    //标题右侧问号动画效果
            $(".way").each(function(index) {
                $(this).hover(function() {
                        $(".way-info").eq(index).animate({
                            marginLeft: "0",
                            opacity: 1
                        }, 200);
                },function() {
                    $(".way-info").eq(index).animate({
                        marginLeft: "-5px",
                        opacity: 0
                    }, 200);
                });
            });

            //职业路径图效果
            $(".learn-card a").each(function(index) {
                if (index == 4) {
                    $(this).mouseover(function() {
                        $(this).css("border", "1px solid rgb(53,181,88)");
                        $(this).css("margin-top", "0px");
                    }).mouseout(function() {
                        $(this).css("border", "1px solid rgb(228,228,228)");
                        $(this).css("margin-top", "0px");
                    });
                }

                if (index == 9) {
                    $(this).mouseover(function() {

                        $(this).addClass("hover");
                        $(this).css("border-right", "1px solid rgb(53,181,88)");
                        $(this).css("margin-top", "-1px");
                    }).mouseout(function() {
                        $(this).removeClass("hover");
                        $(this).css("border-right", "1px solid rgb(228,228,228)");
                        $(this).css("margin-top", "0");
                    });
                }

                if (index == 5 || index == 6 || index == 7 || index == 8) {
                    $(this).mouseover(function() {
                        $(this).css("border-left-color", "rgb(53,181,88)");
                        $(this).addClass("hover");
                        $(this).next().css("border-left-color", "rgb(53,181,88)");
                        $(this).css("margin-top", "-1px");
                    }).mouseout(function() {
                        $(this).removeClass("hover");
                        $(this).css("border-left-color", "rgb(228,228,228)");
                        $(this).next().css("border-left-color", "rgb(228,228,228)");
                        $(this).css("margin-top", "0");
                    });
                } else {
                    $(this).mouseover(function() {
                        $(this).css("border-left-color", "rgb(53,181,88)");
                        $(this).addClass("hover");
                        $(this).next().css("border-left-color", "rgb(53,181,88)");
                    }).mouseout(function() {
                        $(this).removeClass("hover");
                        $(this).css("border-left-color", "rgb(228,228,228)");
                        $(this).next().css("border-left-color", "rgb(228,228,228)");
                    });

                }

            });

            /****************wiki begin*****************/
            $(".one-wiki").each(function(index) {
                    $(this).hover(function() {
                       $(this).css("border", "1px solid rgb(53,181,88)");
                    },function() {
                        $(this).css("border", "1px solid rgb(228,228,288)");
                    });

                });
                /**wiki end*/

            /*enterprise begin*/

            //鼠标移入显示左右箭头
            $(".startgy").hover(function() {
                $(".arrow-left, .arrow-right").show();
            },function() {
                $(".arrow-left,.arrow-right").hide();
            });

            //左按钮点击
            var size = $(".swiper-wrapper a").size();
            var i = 0;

            $(".startgy-box .arrow-left").click(function(){
                i++;
                move();
            })
            //右按钮点击
            $(".startgy-box .arrow-right").click(function(){
                i--;
                move();
            })

            function move(){
                    if(i == size-5){
                    i=0;
                }
                    if(i == -1){
                    i=size-6;
                }
                $(".swiper-wrapper").stop().animate({left:-i*160});
            }

                /*enterprise end*/

                /*footer wenxin */

                $(".qq-icon").hover(function(){
                   $(".weixin").show();
                },function(){
                    $(".weixin").hide();
                });

            });
