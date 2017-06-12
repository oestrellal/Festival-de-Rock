$(function () {
    //jQuery
    //Abrir el modal
    $('#footer-terminos').bind('click', function (e) {
        $('#modal-terminos').css("display", "block");
    });

    $('.modal .close').bind('click', function (e) {
        $('#modal-terminos').css("display", "none");
    });

    window.onclick = function (e) {
        if (e.target == $('#modal-terminos'))
            $('#modal-terminos').css("display", "none");    
    }
});