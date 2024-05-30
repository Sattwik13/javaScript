const score = 400
console.log(score);
console.log(typeof score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));// precision, using mainly for banking sector

const otherNumber = 1232.2112
// const otherNumber = 1232
// const otherNumber = 12.36
console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In'));// Indian standard orientation


//+++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,1,5));
console.log(Math.max(4,3,9,7));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.random() * (max - min +1));
console.log(Math.floor(Math.random() * (max - min +1)));
//output 10 to 20 
console.log(Math.floor(Math.random() * (max - min +1)) + min);