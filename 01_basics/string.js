const name = "SATTWIK"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is: ${name} and my repo count is: ${repoCount}`);

const gameName = new String('SATTWIK')

console.log(gameName[0]);
console.log(gameName.__proto__);// -> object type

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T')); // if T used uppercase, use uppercase neither lowercase

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "   SATTWIK   "
console.log(newStringOne);
console.log(newStringOne.trim());// trim blank space


const url = "https://Sattwik.com/sattwik%20Manna"

console.log(url.replace('%20', '-')); // when '%20' present,replace with '-'
console.log(url.includes('sattwik')); // if sattwik present or not, return true


let Mname = "Sattwik-manna-25"

console.log(Mname.split('-'));// convert an array, split by - separator

const str1 = '5';

console.log(str1.padStart(3, '0'));// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*'); // -> padding with '*', padend also be used

console.log(maskedNumber);// --> ************5581