// function for fade in header
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header__intro').height() - 200){
        $('.header__scroll').addClass('show');
    } else {
        $('.header__scroll').removeClass('show');				
    };   	
});