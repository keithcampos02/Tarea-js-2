function calcularIMC(event) {
    event.preventDefault()


    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    let IMC = peso / (altura * altura);
    let categoria = "";



    switch (true) {
        case (IMC < 18.5):
            categoria = "bajo peso";
            break;
        case (IMC >= 18.5 && IMC < 25):
            categoria = "peso normal";
            break;
        case (IMC >= 25 && IMC < 29.9):
            categoria = "sobrepeso";
            break;
        case (IMC >= 30):
            categoria = "obeso";
            break;
        default:
            categoria = "no se pudo determinar"
    }



    resultado.textContent = `El peso es: ${peso}kg su altura es: ${altura}CM  Estas en la categoria:  ${categoria} `


}