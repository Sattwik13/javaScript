// Immediate Invoked Function Expression (IIFE)
// IIFE resolved global scope pollution

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai() { // ->named IIFE
    console.log(`DB CONNECTED`);
})(); // --> first "()"-> defination & second "()" -> execution & ";" is mandatory beacause it's end invoked fuction


( () => {
    console.log(`DB CONNECTED TO`);
}) ();


((name) => {
    console.log(`DB CONNECTED TO ${name}`);
}) ('SATTWIK');
