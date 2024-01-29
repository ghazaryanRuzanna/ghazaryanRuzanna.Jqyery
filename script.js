


$(document).ready(function(){

    $('#button').click(function(){ 
        $(window).scrollTop(0) 
     })

    // $('tab-link').click(function(){
    //     var $tabID = $(this).attr("data-tab")
    //     $(this).addClass("active").siblings().removeClass("active")

    //     $("#tab-" + $tabID).addClass("active").siblings().removeClass("active")
    // })



    // html
    $({counter:0}).animate({counter:120},{
        easing:"linear",
        duration:2000,
        step:function(){
            $(".tiv1").text(Math.ceil(this.counter))
        }
    })
    
    $({counter:0}).animate({counter:540},{
        easing:"linear",
        duration:1500,
        step:function(){
            $(".tiv2").text(Math.ceil(this.counter))
        }
    })
    $({counter:0}).animate({counter:543},{
        easing:"linear",
        duration:3000,
        step:function(){
            $(".tiv3").text(Math.ceil(this.counter))
        }
    })

    $({counter:0}).animate({counter:250},{
        easing:"linear",
        duration:3000,
        step:function(){
            $(".tiv4").text(Math.ceil(this.counter))
        }
    })





// portfolio------------------------------------


        $({counter:0}).animate({counter:1250},{
            easing:"linear",
            duration:2000,
            step:function(){
                $(".tiv").text(Math.ceil(this.counter))
            }
        })
        
        $({counter:0}).animate({counter:340},{
            easing:"linear",
            duration:1500,
            step:function(){
                $(".tiv-1").text(Math.ceil(this.counter))
            }
        })
        $({counter:0}).animate({counter:5430},{
            easing:"linear",
            duration:3000,
            step:function(){
                $(".tiv-2").text(Math.ceil(this.counter))
            }
        })

        $({counter:0}).animate({counter:18250},{
            easing:"linear",
            duration:3000,
            step:function(){
                $(".tiv-3").text(Math.ceil(this.counter))
            }
        })

// Element tab1-----------------------------
   
    $('.tab-link').click(function(){
        var $tabID = $(this).attr("data-tab")
        $(this).addClass("active").siblings().removeClass("active")
        $("#tab-" + $tabID).addClass("active").siblings().removeClass("active")
    })
    




    // element tab2--------------------------------------
    $('.div-list').on('click', '.tab',  function(){
        $('.tab').removeClass('show');
        $(this).addClass('show');
        $('.tab-content').removeClass('active');
        $($(this).attr('href')).addClass('active');
    })  


    $(window).scroll(function(){
        $(".section").each(function(){
            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() / 2;
            if(x >= y){
                $(this).addClass("active")
            }else{
                $(this).removeClass("active")
            }
        })
    })



// tab2---------------------------------

    $('.myvaerTab').on('click', '.verTab',  function(){
        $('.verTab').removeClass('active');
        $(this).addClass('active');
        $('.tab-text ').removeClass('active');
        $($(this).attr('href')).addClass('active');
    })  




    
    // page--------------------
    $('index2Sec a').on('click', function(event) {
        event.preventDefault();
        var category = $(this).text().toLowerCase().replace(' ', '-');

        if (category == 'all-projects') {
            $('imgDiv.colDiv img:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('imgDiv.colDivimg').each(function() {
                if (!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        return false;
    });



    // lightbox
            $('imgDiv.colDiv sec4Div').on('click', function(event) {
                event.preventDefault();
                var link = $(this).find('img').attr('src');
                $('.gallery img').attr('src', '');
                $('.gallery img').attr('src', link);
                $('.gallery').fadeIn('slow');
            });
            // close lightbox
            $('.gallery').on('click', function(event) {
                event.preventDefault();
                $('.gallery').fadeOut('slow');
            });


    
})    