$(function () {
    if (window.location.hash)
        scroll(0, 0);
    // takes care of some browsers issue
    setTimeout(function () {
        scroll(0, 0);
    }, 1);
    $(function () {
        //your current click function
        $('.scroll').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top + 'px'
            }, 1000, 'swing');
        });

        // if we have anchor on the url (calling from other page)
        if (window.location.hash) {
            // smooth scroll to the anchor id
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top + 'px'
            }, 1000, 'swing');
        }
    });
});

$(function () {
    emailjs.init("user_Gpy9sANtRm5VVKdgJtdo9");
});
new WOW().init();
$('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass("collapsed");

    $(".custom-menu").toggle("fast", function () {

        if ($(".custom-menu").is(":visible")) {

            $('.custom-menu').css('height', '305px').css('transition',
                'height 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s').css(
                '-webkit-transition', 'height 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s'
            );
            $('.custom-menu .nav-item').delay(300).fadeTo(300, 1);


        } else {
            $('.custom-menu').css('height', '0');
            $('.custom-menu .nav-item').css('opacity', '0');
        }

    });
});

// Clicking on Link will close the menu if opened
if (window.matchMedia("(max-width: 992px)").matches) {
    $(".custom-menu .nav-link").click(function () {
        // alert("Hello");
        if ($('.navbar-toggler').hasClass("collapsed")) {
            $('.navbar-toggler').toggleClass("collapsed");
            $('.custom-menu').css('height', '0');
            $('.custom-menu .nav-item').css('opacity', '0');
            $(".custom-menu").css('display', 'none');
        }
    });
}
window.onload = function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("flerrgmail", "template_gyYCQ3X7", this).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    //$("#proto").addClass("btntransition");
                    $("#proto").css("disabled", true);
                    $("#proto").toggleClass("button-change");
                    $("#buttontext").text("Sent");
                    //document.getElementById('submit-btn').classList.add('nav-btn:hover');
                },
                function (error) {
                    $("#buttontext").text("Failed");
                }
            );
        });
};