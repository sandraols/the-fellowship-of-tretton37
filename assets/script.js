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
    //display consultants by name
    const consultantsSortedByName = consultants.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    //sort consultants by office
    // const consultantsSortedByOffice = consultants.sort(function(a, b) {
    // var nameA = a.office.toUpperCase();
    // var nameB = b.office.toUpperCase(); 
    // if (nameA < nameB) {
    //     return -1;
    // }
    // if (nameA > nameB) {
    //     return 1;
    // }
    // return 0;
    // });
    const display = consultantBoxTemplate(consultants);
    $( ".consultants__container" ).append(display);
});
