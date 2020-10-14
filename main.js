// ---------------- Template strings ----------------

const PI = 3.14;
let radius = 3;

function longCirc(r) { return 2 * PI * r; }
function areaCirc(r) { return PI * r * r; }

console.log(`Para un radio de ${radius}...
        la longitud de la circunferencia es ${longCirc(radius)}
        y el área del círculo es ${areaCirc(radius)}`);

// ---------------- Array helpers ----------------

let fb = [1, 2, 3, 4, 5];

// ES5
fb.forEach(item => console.log(item + 2));

// ES6
let fb3 = fb.map(item => item + 2);
// [3, 4, 5, 6, 7]

fb.map((item, index) => console.log(`El item ${item} está en la posición ${index}`));

let array1 = [1, 4, 9, 16];
array1 = array1.map(x => x * 2);
// [2, 8, 18, 32]

let array2 = [1, 4, 9, 16];
array2 = array2.filter(x => x % 2 !== 0);
// [1, 9]

let array3 = [1, 4, 9, 16];
let resultArray3 = array3.reduce((suma,item) => suma + item );
// 30

// ---------------- Spread operator ----------------

let nombre = "David";
let arrayDeLetras = [...nombre];
console.log(arrayDeLetras); // ["D", "a", "v", "i", "d"]

let toys = ["a", 2, [], {}];
let toys2 = toys;
toys2.push(4);
console.log(toys); // ["a", 2, [], {}, 4]

let toys3 = {...toys2};
console.log(toys3); // { 0: "a", 1: 2, 2: [], 3: {}, 4: 4] }

let toys4 = [...toys2, 7, "p", true];
console.log(toys4); // ["a", 2, [], {}, 4, 7, "p", true]

function sumatorioSring(array) {
  console.log(array); // ["D", "a", "v", "i", "d"]
  return array.reduce((x,y) => x + y);
}

let persona = "David";
let total = sumatorioSring(...persona);
console.log(total); // "David"

// ---------------- Rest parameter ----------------

function sumatorio2oMasNumeros(primero, segundo, ...masNumeros) {
  let total = masNumeros.reduce((total, numero) => total + numero);
  return primero + segundo + total;
}

//console.log(sumatorio2oMasNumeros(2, 3)); // Error
console.log(sumatorio2oMasNumeros(2, 3, 7, 56, 98, 62, 535)); // 763

// ---------------- Default parameters ----------------

function sumatorio2o3Numeros(primero, segundo, tercero = 0, cuarto = 0) {
  return primero + segundo + tercero + cuarto;
}

console.log(sumatorio2o3Numeros(1, 2)); // 3
console.log(sumatorio2o3Numeros(1, 2, 3)); // 6
console.log(sumatorio2o3Numeros(1, 2, 3, 4)); // 10

// ---------------- Destructuring ----------------

let a, b;
[a, b] = [10, 20];
// a = 10;
// b = 20;

let c, d;
({c, d} = {c: () => 1, d: 20});
//({ a, b, ...rest } = [10, 20, 30, 40]);

// ---------------- This & Arrow ----------------

class Coche {
  constructor(color) {
    this.color = color;
  }

  dameColor() {
    return this.color; // Devuelve el color del objeto que llama al método
  }

  dameColorSinFlecha() {
    let sinFlecha = function () { return this.color };

    return sinFlecha(); // Error: undefined (no hay contexto)
  }

  dameColorConFlecha() {
    let conFlecha = () => this.color;

    return conFlecha(); // Devuelve el color del objeto
  }
}

let miCoche = new Coche("white");
let miColor1 = miCoche.dameColor(); // white
//let miColor2 = miCoche.dameColorSinFlecha(); // Error: undefined
let miColor3 = miCoche.dameColorConFlecha(); // white

console.log(miColor1);
//console.log(miColor2);
console.log(miColor3);

// ---------------- Promises ----------------

const miPrimeraPromesa = new Promise((funcionOK, funcionKO) => {

  // Asynchronous stuff
  setTimeout(() => funcionOK(Date.now()), 2000);
});

miPrimeraPromesa
  .then((data) => { console.log("Paso 1: " + data); return "Todo ok"; })
  .then((data) => { console.log("Paso 2: " + data); return "No del todo ok"; })
  .then((data) => { console.log("Paso 3: " + data); })
  .catch(() => console.log("El reloj del sistema está roto"));
