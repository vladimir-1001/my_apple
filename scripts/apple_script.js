$("body").on("click", ".mobile_menu_button", function(){
                let disp = $(".mobile_menu_button img").attr("src");
                $(".my_mobile_menu").slideToggle(300);
                if(disp=="close.svg"){
                    $(".mobile_menu_button img").attr("src", "menu.svg");
                }
                else{
                    $(".mobile_menu_button img").attr("src", "close.svg");
                }
            })
            
            $("body").on("click", ".search_open", function(){
                $(".my_menu_links").css("display", "none");
                $(".search_block").css("display", "inline-block");
            })
            $("body").on("click", ".search_block_close", function(){
                $(".my_menu_links").css("display", "inline-block");
                $(".search_block").css("display", "none");
            })

$(window).scroll(function(){
    if ($(this).scrollTop() > 1400) {
        $(".dynamic_image_header").animate({'opacity':'1'}, 3000);
    }
    if ($(this).scrollTop() > 1700) {
        $(".phone_left").animate({'top':'70px'}, 5000);
    }
    if ($(this).scrollTop() > 2400) {
        if($(window).width()>=480){
            $(".dynamic_foto_block").animate({'opacity':'1', 'top':'0px'}, 5000);
            $(".image_phone").animate({'left':'70px', 'top':'35px'}, 5000);
        }
    }
})

$("footer").on("click", ".accordeon_head", function(){
    $(this).next().slideToggle(1000);
    $(this).toggleClass("accordeon_head_2");
})