//Parte 1

//creacion de variables
const cliente = "Mateo Valencia";
let ciudad = "Medellin";
let clienteRappiPrime = true;

//saludo con concatenacion de texto fijo y variables
console.log(`Hola ${cliente}, bienvenid@ a nuestro servicio de rappi en ${ciudad}.`);

//parte 2

//lista de productos
let productos = ["Hamburguesa", "Papas", "Gaseosa"];

//lista completa
console.log(`Tu pedido es: ${productos}`);

//primer producto de la lista
console.log(`El primer producto de tu pedido es: ${productos[0]}`);

//agregar un producto
productos.push("Postre");

//imprimir lista actualizada
console.log(`Tu pedido actualizado es: ${productos}`);

//eliminar ultimo producto
productos.pop();

//imprimir lista actualizada
console.log(`Tu pedido actualizado es: ${productos}`);

//imprimir cantidad de productos
console.log(`Tu pedido tiene ${productos.length} productos`);

//parte 3

//creacion de objeto
let pedido = {
    cliente: cliente,
    ciudad: ciudad,
    productos: productos,
    estado: "En preparación"
};

//imprimir el pedido completo
console.log(pedido);
console.log(`El primer producto del pedido es: ${pedido.productos[0]}`); //reto de anidacion

//imprimir el nombre del cliente
console.log(`El nombre del cliente es: ${pedido.cliente}`);

//cambiar el estado del pedido
pedido.estado = "En camino";

//imprimir el pedido actualizado 
console.log(pedido);

//parte 4

//crear variables y constante
let valorProductos = 50000;
let valorDomicilio = 4000;
const propina = 0.1; // 10% de propina

//se calcula el total y se imprime
let total = valorProductos + valorDomicilio;
console.log(`El valor total del pedido es: ${total}`);

//Trampa intencional
valorProductos = "20000";
valorDomicilio = 3500;

//se suma para obeservar que imprimer

console.log(`El valor total del pedido es: ${valorProductos + valorDomicilio}`);
//el resultado es 200003500 porque al poner el valor de producto como texo y al ser una suma, se unen si hay texto

//correccion
valorProductos = Number(valorProductos); //se convierte el valor de producto a numero
total = valorProductos + valorDomicilio;
console.log(`El valor total del pedido es: ${total}`);

