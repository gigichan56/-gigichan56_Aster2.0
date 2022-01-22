$(document).ready(function(){
 

      $('#my_carousel').hammer().on('swipeleft', function(){  
        $('#my_carousel').carousel('next');  
    });  
      
    $('#my_carousel').hammer().on('swiperight', function(){  
        $('#my_carousel').carousel('prev');  
    }); 
});