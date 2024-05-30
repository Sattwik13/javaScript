const userEmail = "0";

if(userEmail) {
    // console.log("Got user Email");
}
else {
    // console.log("Don't have user email");
}

// falsy values ->
//                false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthly values ->
//                  "0", "false", 'false', " ",  [], {}, function(){}

if(userEmail.length === 0) {
    // console.log("Array is empty");
}

const Obj = {}

if(Object.keys(Obj).length === 0) { // ->object check empty or not
    // console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20;

console.log(val1);


// Ternary Operator (?)

// Syntax-> condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less thsn 80") : console.log("more than 80");







