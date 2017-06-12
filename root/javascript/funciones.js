$(function () {
    //jQuery
    //Mostrar el menú en tabletas y celulares.
    $('#menu-movil').bind('click', function(){
		$('header nav').slideToggle();
	});

    //Abrir el modal
    $('#footer-terminos').bind('click', function (e) {
        $('#modal-terminos').css("display", "block");
    });

    //Cerrar el modal    
    $('.modal .close').bind('click', function (e) {
        $('#modal-terminos').css("display", "none");
    });

    window.onclick = function (e) {
        if (e.target == $('#modal-terminos'))
            $('#modal-terminos').css("display", "none");    
    }
});