$(document).ready(function () {
    // Dropdown Interaction
    $('.collapse').click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass('active')
        $(this).toggleClass('active');
    });

    // Alert Interaction
    $('.modal-close').click(function (e) { 
        e.preventDefault();
        $(this).closest('.modal').fadeOut().delay(2000).queue(function () {
            $(this).remove()
        })
    });

    $('.notification-close').click(function (e) { 
        e.preventDefault();
        $(this).closest('.notification').fadeOut().delay(2000).queue(function () {
            $(this).remove()
        })
    });

    // Button Interaction
    $('.action').click(function (e) { 
        e.preventDefault();
        $(this).addClass('activeAction')    
    });

    // Dropdown Interaction
    $('.dropdown-toggle').click(function (e) { 
        e.preventDefault();
        $(this).siblings('.dropdown-menu').slideToggle();
    });

    // Form Interaction
    $("form").on("keypress", function (event) {
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});