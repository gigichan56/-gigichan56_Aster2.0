$(document).ready(function(){

    $('#my_carousel').hammer().on('swipeleft', function(){  
        $('#my_carousel').carousel('next');  
    });  
      
    $('#my_carousel').hammer().on('swiperight', function(){  
        $('#my_carousel').carousel('prev');  
    }); 

    $('#my_carousel_phone').hammer().on('swipeleft', function(){  
        $('#my_carousel_phone').carousel('next');  
    });  
      
    $('#my_carousel_phone').hammer().on('swiperight', function(){  
        $('#my_carousel_phone').carousel('prev');  
    }); 

    

});