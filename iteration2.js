const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

let edad = character.age;

console.log (edad)

/////////

let firstName = "Jon";
let lastName = "snow";
let age = 24;

let frase = "Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos."

console.log (frase)

/////////

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let precioFinal = toy1.price + toy2.price; 

console.log (precioFinal)

/////////

let globalBasePrice = 25000;
let basePriceCar1= 50000;
let basePriceCar2= 70000;
let bmwmmFinalPrice = (basePriceCar1 + globalBasePrice);
let chevroletCorbinaFinalPrice = (basePriceCar2 + globalBasePrice);

console.log("Precio BMW m&m:" + " " + bmwmmFinalPrice);
console.log("Precio Chevrolet Corbina:" + " " + chevroletCorbinaFinalPrice);