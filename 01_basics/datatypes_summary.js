//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name ="SATTWIK"
const number = 2;
const isValid = true;
let capacity = undefined;
let age = null;

console.log(typeof age);

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id);
console.log(anotherid);
console.log(id === anotherid);

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj",  "doga"];

let myObject = {
    name: "hitesh",
    age: 22
}

const myFunction = function() {
      console.log("Hello World");
}