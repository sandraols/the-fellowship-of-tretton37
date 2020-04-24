// function for fade in header
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header__intro').height() - 200){
        $('.header__scroll').addClass('show');
    } else {
        $('.header__scroll').removeClass('show');				
    };   	
});

const source = document.getElementById('consultant-template').innerHTML;
const consultantBoxTemplate = Handlebars.compile(source);

$.get('https://api.tretton37.com/ninjas', function(consultants) {
    console.log(consultants);
     const display = consultantBoxTemplate(consultants);
     console.log(display);
    $( ".consultants__container" ).append(display);
    
});
