(function(){
	
    var h3Dinamico = '<h3>Dinamico…</h3>';

    $("h3").on("click", function(){

        // $("body").prepend(h3Dinamico); // Coloca el mensaje al final del body
        // $("body").append(h3Dinamico); // Coloca el mensaje al principio del body
        $(".container").append(h3Dinamico);   // lo coloca al inicio    prepend
    });
})();
