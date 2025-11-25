(function () {  //funccion anonima

    var dds = $('dd');  //Cargamos los 'dd' en la variable dds
    dds.hide();  //Ocultamos los dd
    dds.eq(0).show();  // eq selecciona el primero y .show lo muestra
    $('dt').on('mouseenter', function(){

        dds.slideUp(1000);       //tambien puede ser .hide pero actua diferente
        
        $(this)
            .next() //busca elemento hermano
            .show();

    });



})();

/* REPASO: usamos # si queremos llamar por id, usamos punto si queremos llamar por clase y usamos directo el nombre del elemento si queremos referirnos a todos los que son como el*/
