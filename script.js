// función del formulario
function enviarFormulario(){

    // capturar datos
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let pizza = document.getElementById("pizza").value;

    // validar espacios vacíos
    if(nombre === "" || correo === "" || pizza === ""){

        alert("Por favor completa todos los campos");

    }else{

        alert("Pedido enviado correctamente 🍕");

    }

}