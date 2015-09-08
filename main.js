// Variables

var t = 500;

// Functions!
var cursorChange = function (element) {
    $(document).on("mouseover", element, function () {
        $(this).css('cursor', 'pointer');
    });
}

var showOverlay = function (paper) {
    $(".overlay").insertAfter($(paper).parent());
    $(".overlay").show();
    $(paper).parent().css("z-index", "2");
}

var hideOverlay = function (paper) {
    $(".overlay").insertAfter($(paper).parent());
    $(".overlay").hide();
    setTimeout(function () {
        $(paper).parent().css("z-index", "0");
    }, 500);
}

var closePaper = function (paper){
    $('body').css('overflow', 'auto');
    paper.velocity({
        height: '145px'
    }, {
        duration: t - 300,
        easing: "easeInSine"
    });
    paper.css("overflow", "hidden");
    paper.children('.description-wrapper').velocity({
        height: '103px'
    }, {
        duration: t - 300,
        easing: "easeInSine"
    });
    paper.children('.see-more').html('<span class="down-triangle">▼</span>  SEE MORE  <span class="down-triangle">▼</span>');
    paper.children('.see-more').css('color', '#DF550A');
    paper.removeClass('expanded');
    paper.children('.see-more').removeClass('see-less');
    hideOverlay(paper);
}


$(document).ready(function () {
    cursorChange('#menu-icon');
    cursorChange('.star');
     
    var getPaper = function (overlay) {
        return overlay.prev('.job-post').children('.paper');
    }

    $(document).on("click", '.paper', function (e) {
        if ($(this).hasClass('expanded')== false) {
            e.preventDefault();
            $('body').css('overflow', 'hidden');
            $(this).children('.see-more').velocity("scroll", {
                offset: -300,
                duration: t,
                easing: "easeOutSine"
            });
            var dHeight = ($(this).find('.description')).height();
            var mtop = $('.job-post').css('margin-top');

            $(this).velocity({
                height: '500px'
            }, {
                duration: t,
                easing: "easeOutSine"
            });
            $(this).children('.description-wrapper').velocity({
                height: dHeight + 80
            }, {
                duration: t,
                easing: "easeOutSine"
            });

            $(this).css("overflow", "scroll");
            $(this).children('.see-more').html('<span class="down-triangle" style="color:#acacac">▲</span>  SEE LESS  <span class="down-triangle" style="color:#acacac">▲</span>');
            $(this).children('.see-more').css('color', '#acacac');
            $(this).addClass('expanded');
            $(this).children('.see-more').addClass('see-less');
            showOverlay($(this));
        }
    });

    $(document).on("click", ".overlay", function () {
        paper = getPaper($(this));
        closePaper(paper);
    });

     $(document).on("click", ".see-less", function (e) {
         e.stopPropagation();
        paper = $(this).parent()
        closePaper(paper);
    });

    
    $(document).on("click", '.star', function () {
        if ($(this).hasClass('star-active')) {
            $(this).removeClass('star-active');
            $(this).addClass('star-inactive');
        } else {
            $(this).removeClass('star-inactive');
            $(this).addClass('star-active');
        }
    });
});