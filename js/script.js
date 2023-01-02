//bx slider

$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
    });
    
    jQuery('.main_menu').meanmenu({
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: 767,
    });
});