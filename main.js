
//        functions!
var cursorChange = function (element) {
    $(element).mouseover(function(){    
        $(this).css('cursor','pointer');
});
}
cursorChange('.star');


$(document).ready(function(){
    var i = 0;
    var j = 0;
    var t = 500;
    $('.see-more').click(function(){    
        if (i%2 ===0){
            var dHeight = $('.description').height();
            var mtop = $('.job-post').css('margin-top');
            $(this).parent().animate({height:dHeight+80},t);
            $('.description-wrapper').animate({height:dHeight+10},t);
            $('.see-more').html('<span class="down-triangle" style="color:#acacac">▲</span>  SEE LESS  <span class="down-triangle" style="color:#acacac">▲</span>');
            $('.see-more').css('color','#acacac');
            $(this).parent().parent().next().animate({'marginTop':dHeight-40},t);
        }
        else {

            $(this).parent().animate({height:'143px'},t);                            
            $('.description-wrapper').animate({height:'73px'},t);
            $('.see-more').html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
            $('.see-more').css('color','#DF550A');
            $(this).parent().parent().next().animate({'marginTop':20},t);
        }
        i++;
        });
    $('.star').click(function(){
        if (j%2 ==0){
            $(this).css('color','#DF550A');
        }
        else {
            $(this).css('color','#ACACAC');
        }
        j++;
    });
});


