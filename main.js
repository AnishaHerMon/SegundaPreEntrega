// Variables globales
let pedidos = [];
let inventario = {
    cafe: 1000,
    leche: 500,
    jarabe: 200
};

// Objetos
let producto = {
    nombre: "Mocha",
    descripcion: "Café espresso, leche caliente o vaporizada, y jarabe de chocolate o cacao en polvo",
    precio: 96,
    categoria: "Café",
    disponible: true
};

let cliente = {
    nombre: "Erick Herrera",
    email: "erick@example.com",
    historialPedidos: [
        { producto: "Mocha", precio: 96 },
        { producto: "Muffin de Arándanos", precio: 30 }
    ]
};

let pedido = {
    cliente: "Erick Herrera",
    productos: [
        { nombre: "Mocha", precio: 96 },
        { nombre: "Muffin de Arándanos", precio: 30 }
    ],
    total: 126,
    estado: "En preparación"
};


let nombreCliente = prompt("Bienvenido a AnnieCoffee. Por favor, ingrese su nombre:");

// Array de productos que representa el menú de la cafetería
const MENU = [
    { nombre: "Helado Latte", precio: 80 },
    { nombre: "Caramel Macchiato", precio: 94 },
    { nombre: "Cappuccino", precio: 75 },
    { nombre: "Frappuccino", precio: 94 },
    { nombre: "Mocha", precio: 96 },
    { nombre: "Muffin de Arándanos", precio: 30},
    { nombre: "Muffin de Chocolate", precio: 30},
    { nombre: "Muffin de Vainilla", precio: 30},
    { nombre: "Muffin de RedVelvet", precio: 30},
    { nombre: "Galleta Chocolate", precio: 30}

];

 function realizarPedido() {
     alert(`¡Hola ${nombreCliente}! ¿Estas listo para tu cafe de hoy?`);
    
     let deseaOrdenar = prompt("¿Ya sabes lo que deseas pedir? (SI/NO)");

     if (deseaOrdenar && deseaOrdenar.toUpperCase() === "SI") {
         mostrarMenu();
     } else {
         alert("Esperamos verte pronto. ¡Que tengas un buen día!");
     }
 }

// Funcion mostrarMenu con switch case 
// function mostrarMenu() {
//     let opcionesMenu = "1. Helado Latte\n2. Caramel Macchiato\n3. Cappuccino\n4. Frappuccino\n5. Mocha";
//     let opcionElegida = prompt(`Por favor, elija una opción del menú:\n${opcionesMenu}`);

//     switch (opcionElegida.toLowerCase()) {
//         case "1":
//         case "helado latte":
//             procesarPedido("Helado Latte", 80);
//             break;

//         case "2":
//         case "caramel macchiato":
//             procesarPedido("Caramel Macchiato", 94);
//             break;

//         case "3":
//         case "cappuccino":
//             procesarPedido("Cappuccino", 75);
//             break;

//         case "4":
//         case "frappuccino":
//             procesarPedido("Frappuccino", 94);
//             break;

//         case "5":
//         case "mocha":
//             procesarPedido("Mocha", 96);
//             break;

//         default:
//             alert("Lo siento, no entendí esa opción. Por favor, elija del menú.");
//             mostrarMenu();
//             break;
//     }
// }

 function procesarPedido(producto, precio) {
     alert(`Gracias por pedir ${producto}. El total es de $${precio}.`);

     let formaDePago = prompt("¿Cómo desea pagar? (Efectivo/Tarjeta)");

         if (formaDePago.toLowerCase() === "efectivo") {
             alert("Por favor, tenga el monto exacto preparado. Se lo recogeremos en breve.");
         } else if (formaDePago.toLowerCase() === "tarjeta") {
             let numTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");
             alert(`Hemos procesado su tarjeta. Su pedido será entregado en breve a la dirección asociada a la tarjeta.`);
         } else {
             alert("Forma de pago no reconocida. El pedido no se procesará.");
             return; // Salir de la función si la forma de pago no es reconocida
         }
    
          prepararOrden(producto);

    

     agradecer();
 }

 function agradecer() {
     alert(`${nombreCliente}, hemos procesado su pedido. Está en preparación. Pronto será contactado.`);
 }

 // Inicia el proceso al cargar la página.
 realizarPedido();


// Función para mostrar el menú con map y find y procesar el pedido
function mostrarMenu() {
    let opcionesMenu = MENU.map((item, index) => `${index + 1}. ${item.nombre}`).join("\n");
    let opcionElegida = prompt(`Por favor, elija una opción del menú:\n${opcionesMenu}`);

    let seleccion = MENU.find(item => item.nombre.toLowerCase() === opcionElegida.toLowerCase());
    if (seleccion) {
        procesarPedido(seleccion.nombre, seleccion.precio);
    } else {
        alert("Lo siento, no entendí esa opción. Por favor, elija del menú.");
        mostrarMenu();
    }
}




