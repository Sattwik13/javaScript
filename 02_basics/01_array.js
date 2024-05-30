//+++++++++++++++  Array  +++++++++++++++++++

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["pantua", "rosogolla"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);
console.log(typeof myArr2);

// ->Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr); // -> 
// console.log(typeof myArr);// -> object

const demo = myArr.shift();
console.log(myArr); //-> [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof demo);// ->shift --convert type 'object' to 'number'

// console.log(myArr.includes(10)); // -> 10 is present or not ?
// console.log(myArr.includes(2));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // -> join convert object to string

// +++++++++++++++  slice, splice  +++++++++++++++++++

console.log("A ", myArr);// ->A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)

console.log(myn1);// ->[ 1, 2 ]
console.log("B ", myArr);// ->B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);// ->C  [ 0, 4, 5 ]
console.log(myn2); // ->[ 1, 2, 3 ]