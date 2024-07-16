console.log("funcioanndo")


function enviarSolicitud(event) {
    event.preventDefault()
const formulario = document.getElementById("formularioSolicitud");
const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const asunto = document.getElementById("asunto").value;
const mensaje = document.getElementById("mensaje").value;
let copia = document.getElementById("copia").value;

switch (copia) {
    case "si":
        alert("se enviara copia de solciitud al correo")
        break;
        case "no":
        alert(" no se enviara ninguna copia")
        break;

    default:
        break;
}



resultado.textContent=`El nombres es ${nombre} el correo es  ${email} el asunto es  ${asunto} el mensaje es  ${mensaje}`

    
}



