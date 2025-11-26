// app.js (Usando jQuery)

$(document).ready(function() {
    
    // El código se ejecuta cuando el documento (incluidos todos los elementos) está listo
    
    // Seleccionar el botón y adjuntar el evento 'click'
    $('button').on("click", function(){
        
        // 1. Obtener y validar el número base
        // .val() obtiene el valor del input con ID 'base'
        const baseStr = $('#base').val(); 
        
        // parseInt convierte el string a un número entero
        const base = parseInt(baseStr); 

        // Validar si es un número válido y positivo
        if (isNaN(base) || base <= 0) {
            alert("Por favor, introduce un número válido para la base.");
            return; // Detiene la función si la validación falla
        }
        
        // 2. Limpiar la tabla de resultados anteriores
        // Seleccionamos todas las filas (tr) de la tabla con la clase .table-striped, 
        // excepto la primera fila (:not(:first)) que es el encabezado.
        $(".table-striped tr:not(:first)").remove();

        // 3. Generar la tabla de multiplicar usando un bucle 'for'
        for (let i = 1; i <= 10; i++) {
            const resultado = base * i;

            // 4. Construir la nueva fila HTML
            const newRow = `
                <tr>
                    <td>${base}</td>
                    <td>X</td>
                    <td>${i}</td>
                    <td>=</td>
                    <td>${resultado}</td>
                </tr>
            `;
            
            // 5. Añadir la nueva fila al final de la tabla (el elemento .table-striped)
            // .append() es el método jQuery para añadir contenido al final
            $(".table-striped").append(newRow);
        }
    });

}); 
