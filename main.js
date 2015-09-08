
//        functions!
var cursorChange = function (element) {
    $(document).on("mouseover", element, function(){    
        $(this).css('cursor','pointer');
});
}

var showOverlay = function(paper){
    $(".overlay").insertAfter($(paper).parent());
    $(".overlay").show();
    $(paper).parent().css("z-index","2");
        }
    
var hideOverlay = function(paper){
    $(".overlay").insertAfter($(paper).parent());
    $(".overlay").hide();
    setTimeout(function(){
        $(paper).parent().css("z-index","0");},500);
        }    


$(document).ready(function(){
    cursorChange('#menu-icon');
    cursorChange('.star');
    var t = 500;

//    $(document).on("click", '.see-more', function(e){  
//        if ($(this).hasClass('see-less')){
//            $('body').css('overflow','auto');
//            $(this).parent().velocity({height:'145px'},t);                            
//            $(this).parent().children('.description-wrapper').animate({height:'103px'},t);
//            $(this).html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
//            $(this).css('color','#DF550A');
//            $(this).removeClass('see-less');
//            hideOverlay($(this));
////            $(this).parent().parent().next().animate({'marginTop':20},t);
//        }
//        else{
//            e.preventDefault();
//            $('body').css('overflow','hidden');
//            $(this).velocity("scroll", {offset: -300, duration: 500, easing: "ease" });
//            var dHeight = $('.description').height();
//            var mtop = $('.job-post').css('margin-top');
////            $(this).parent().velocity({height:dHeight+135},t);
//            $(this).parent().velocity({height:'500px',t});
//            $(this).parent().children('.description-wrapper').animate({height:dHeight+80},t);
//            
//            $(this).parent().css("overflow","scroll");
//            $(this).html('<span class="down-triangle" style="color:#acacac">▲</span>  SEE LESS  <span class="down-triangle" style="color:#acacac">▲</span>');
//            $(this).css('color','#acacac');
//            $(this).addClass('see-less');
//            showOverlay($(this));
//        }
//    });
//       
var getPaper = function(overlay){
    return overlay.prev('.job-post').children('.paper');
}
    
    $(document).on("click", '.paper', function(e){ 
        if ($(this).hasClass('expanded')){
//            $('body').css('overflow','auto');
//            $(this).velocity({height:'145px'},{duration:t-300, easing: "easeInSine"});                             $(this).css("overflow","hidden");
//            $(this).children('.description-wrapper').velocity({height:'103px'},{duration:t-300, easing: "easeInSine"});
//            $(this).children('.see-more').html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
//            $(this).children('.see-more').css('color','#DF550A');
//            $(this).removeClass('expanded');
//            $(this).children('.see-more').removeClass('see-less');
//            hideOverlay($(this));
        }
        else{
            e.preventDefault();
            $('body').css('overflow','hidden');
            $(this).children('.see-more').velocity("scroll", {offset: -300, duration: t, easing: "easeOutSine" });
            var dHeight = ($(this).find('.description')).height();
//            console.log(dHeight);
            var mtop = $('.job-post').css('margin-top');
//            $(this).parent().velocity({height:dHeight+135},t);
            $(this).velocity({height:'500px'},{duration:t, easing: "easeOutSine"});
            $(this).children('.description-wrapper').velocity({height:dHeight+80},{duration:t, easing: "easeOutSine"});
            
            $(this).css("overflow","scroll");
            $(this).children('.see-more').html('<span class="down-triangle" style="color:#acacac">▲</span>  SEE LESS  <span class="down-triangle" style="color:#acacac">▲</span>');
            $(this).children('.see-more').css('color','#acacac');
            $(this).addClass('expanded');
            $(this).children('.see-more').addClass('see-less');
            showOverlay($(this));
        }
    });
    
    $(document).on("click", ".overlay", function(){
        paper = getPaper($(this));
        $('body').css('overflow','auto');
        paper.velocity({height:'145px'},{duration:t-300, easing: "easeInSine"});                             paper.css("overflow","hidden");
        paper.children('.description-wrapper').velocity({height:'103px'},{duration:t-300, easing: "easeInSine"});
        paper.children('.see-more').html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
        paper.children('.see-more').css('color','#DF550A');
        paper.removeClass('expanded');
        paper.children('.see-more').removeClass('see-less');
        hideOverlay(paper); 
});
    
    $(document).on("click", '.star', function(){        
        if ($(this).hasClass('star-active')){
            $(this).removeClass('star-active');
            $(this).addClass('star-inactive');
        }
        else {
            $(this).removeClass('star-inactive');
            $(this).addClass('star-active');
        }
    });
});


