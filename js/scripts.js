$(function () {
    $('.collapse').on('show.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
        console.log(this);
    });
    $('.collapse').on('hide.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
    });
    $('#myForm').validator({
        feedback: {
            success: 'fa fa-check-circle',
            error: 'fa fa-times-circle'
        }
    });
    $('.form-sel').select2({
        minimumResultsForSearch: Infinity
    });
    wow = new WOW({
        offset: 60
    });
    wow.init();
});
$(document).ready(function() {

    $(window).scroll(function() {
        // Высота проявления кнопки
        if ($(this).scrollTop() > 100) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });

    $('#go-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
            // Скорость подъема
        }, 2000);
        return false;
    });

});