$("document").ready(function () {


    $.validate({

    });

    $('document').ready(function () {

        $("#contact-form").on('submit', function (e) {

            e.preventDefault();

            $('#firstname').val('')
            $('#email').val('')
            $('#text').val('')

            alert('შეტყობინება წარმატებით გაიგზავნა');
        });

    });

    $('li a').click(function (e) {
        $('a').removeClass('active');
        $(this).addClass('active');
    });

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    });


    // $('.parallax-window').parallax({ imageSrc: 'images/header.png' });


})