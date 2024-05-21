let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score);
console.log(typeof(valueNumber));
console.log(score);

let score1 = "33abc"
let valueNumber1 = Number(score1);
console.log(typeof(valueNumber1));
console.log(valueNumber1); //NaN--> Not A Number
console.log(score1);

let score2 = null;
let valueNumber2 = Number(score2);
console.log(typeof(valueNumber2));
console.log(valueNumber2); 
console.log(score2);

let score3 = true;
let valueNumber3 = Number(score3);
console.log(typeof(valueNumber3));
console.log(valueNumber3); 
console.log(score3);

//"33" =>  33
//"33abc" => NaN
//true => 1; false=> 0

let isLoggedIn = 1

let  booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; o => false;
// "" => false
//"SATTWIK" => true


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// ****************************  Operation ******************************

let value = 3;
let negValue = -value;
// console.log(negValue);
console.log(2%3);

console.log("1" +2);// -> 12
console.log(1 + "2");// -> 12
console.log("1" + 2 + 2);// -> 122
console.log(1 + 2 + "2");// -> 32
console.log(1 + 2 + "2" + "1");// -> 321
console.log("2" + "1" + 1 + 2); // -> 2112
console.log((5+4) * 2 % 3);

console.log(true);
console.log(+true);

let a=3;
let b= a++;// --> postfix
console.log(b);

let c= 3;
let d= ++c;// -> prefix
console.log(d);


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);// -> false
console.log(null == 0);// -> false
console.log(null >= 0);//-> true     
console.log(null < 0);// -> false
console.log(null <= 0);// -> true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);