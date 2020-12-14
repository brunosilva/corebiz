$(document).ready(() =>{

    //script para fazer apresentação do sub-menu
    //não está sendo usado. (somente para estudo)
    // $(".l2").mouseenter(function() {
    //     $(this).addClass('sub-effects');
    //     $(this).find('.sub1').fadeIn(600);
    // });
    // $(".l2").mouseleave(function() {
    //     $(this).removeClass('sub-effects');
    //     $(this).find('.sub1').hide();
    // });


    $(".btn-login").click(function() {
        $(".control-login-options").slideToggle("slow").css( "display", "flex" );
    });

    $(".btn-close").click(function() {
        $(".control-login-options").slideUp("slow").css( "display", "none" );
    });

    $(".btn-checkout").click(function() {
        $("#miniCartOverlay").slideToggle("slow").css( "display", "flex" );
    });

    $(".btn-close").click(function() {
        $("#miniCartOverlay").slideUp("slow").css( "display", "none" );
    });

});