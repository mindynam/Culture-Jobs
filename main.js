
//        functions!
var cursorChange = function (element) {
    $(document).on("mouseover", element, function(){    
        $(this).css('cursor','pointer');
});
}


$(document).ready(function(){
    cursorChange('#menu-icon');
    cursorChange('.star');
    var i = 0;
    var j = 0;
    var t = 500;

    $(document).on("click", '.see-more', function(){    
        if ($(this).hasClass('see-less')){

            $(this).parent().animate({height:'145px'},t);                            
            $(this).parent().children('.description-wrapper').animate({height:'103px'},t);
            $(this).html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
            $(this).css('color','#DF550A');
            $(this).removeClass('see-less');
            $(this).parent().parent().next().animate({'marginTop':20},t);
        }
        else{
            var dHeight = $('.description').height();
            var mtop = $('.job-post').css('margin-top');
            $(this).parent().animate({height:dHeight+140},t);
            $(this).parent().children('.description-wrapper').animate({height:dHeight+80},t);
            $(this).html('<span class="down-triangle" style="color:#acacac">▲</span>  SEE LESS  <span class="down-triangle" style="color:#acacac">▲</span>');
            $(this).css('color','#acacac');
            $(this).addClass('see-less');
            $(this).parent().parent().next().animate({'marginTop':dHeight+28},t);
        }
    
        });
    $(document).on("click", '.star', function(){
        
        if (j%2 ==0){
            $(this).css('color','#DF550A');
        }
        else {
            $(this).css('color','#ACACAC');
        }
        j++;
    });
});


