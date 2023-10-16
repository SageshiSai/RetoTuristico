// Obtener el formulario por su ID
var form = document.getElementById('formulario');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    // Prevenir el comportamiento predeterminado del envío del formulario
    event.preventDefault();

    // Crear un objeto para almacenar los datos del formulario
    var data = {};

    // Recorrer los elementos del formulario
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        // Obtener el nombre y el valor del elemento del formulario
        var name = element.name;
        var value = element.value;

        // Almacenar el valor del elemento del formulario en el objeto data
        data[name] = value;
    }

    // Convertir el objeto data a una cadena JSON
    var jsonData = JSON.stringify(data);

    // Aquí puedes utilizar la cadena JSON jsonData para enviarla a un servidor o realizar otras operaciones
    console.log(jsonData);
});