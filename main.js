let edad = prompt("Por favor ingresá tu edad 👇🏼");

if (edad>=16){
    alert("Puedes ingresar 😁");
} else {
    alert("Lo siento, no puedes ingresar 🙁")
}

const nombre = prompt("Ingrese su nombre de usuario");
const pass = parseInt(prompt("Elija una constraseña numérica"));
alert("Muchas gracias, para validar su información ingrese nuevamente su usuario y contraseña.");
let usuario = prompt("Nombre de usuario");
let clave = parseInt(prompt("Contraseña"));

for(let i=0; i<=2; i++){
    if(nombre==usuario && pass==clave){
        alert(`Hola ${nombre}👋🏼 Bienvenido a nuestro Calculador de Propinas 😀`);
        break;
    } else{
        alert("Usuario o contraseña incorrectos. Por favor verificá tus datos.");
        usuario= prompt("Nombre de usuario");
        clave= parseInt(prompt("Constraseña"));
    }
}

let totalCuenta = parseInt(prompt("Ingrese el total de su cuenta 🤑"));
let porcentaje = parseInt(prompt("Ingrese el porcentaje que desea dejar (sin utilizar el símbolo %). Lo sugerido es una propina del 10%."))

function propina(totalCuenta, porcentaje){
    let total= totalCuenta*(porcentaje/100);
    return total;
}
let total= totalCuenta*(porcentaje/100);
alert(`La cantidad de propina a dejar es ${total}`)
alert("Muchas gracias por utilizar nuestro Calulador de Propinas. Nos vemos!👋🏼");






