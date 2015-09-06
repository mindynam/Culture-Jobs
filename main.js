
//        functions!
var cursorChange = function (element) {
    $(document).on("mouseover", element, function(){    
        $(this).css('cursor','pointer');
});
}

var showOverlay = function(x){
    $(".overlay").insertAfter($(this).parent().parent());
    $(".overlay").show();
    $(x).parent().parent().css("z-index","2");
        }
    
var hideOverlay = function(x){
    $(".overlay").insertAfter($(this).parent().parent());
    $(".overlay").hide();
    $(x).parent().parent().css("z-index","1");
        }    


$(document).ready(function(){
    cursorChange('#menu-icon');
    cursorChange('.star');
    var j = 0;
    var t = 500;

    $(document).on("click", '.see-more', function(e){  
        if ($(this).hasClass('see-less')){
            $('body').css('overflow','auto');
            $(this).parent().velocity({height:'145px'},t);                            
            $(this).parent().children('.description-wrapper').animate({height:'103px'},t);
            $(this).html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
            $(this).css('color','#DF550A');
            $(this).removeClass('see-less');
            hideOverlay($(this));
//            $(this).parent().parent().next().animate({'marginTop':20},t);
        }
        else{
            e.preventDefault();
            $('body').css('overflow','hidden');
            $(this).velocity("scroll", {offset: -300, duration: 500, easing: "ease" });
            var dHeight = $('.description').height();
            var mtop = $('.job-post').css('margin-top');
//            $(this).parent().velocity({height:dHeight+135},t);
            $(this).parent().velocity({height:'500px',t});
            $(this).parent().children('.description-wrapper').animate({height:dHeight+80},t);
            
            $(this).parent().css("overflow","scroll");
            $(this).html('<span class="down-triangle" style="color:#acacac">▲</span>  SEE LESS  <span class="down-triangle" style="color:#acacac">▲</span>');
            $(this).css('color','#acacac');
            $(this).addClass('see-less');
            showOverlay($(this));
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


