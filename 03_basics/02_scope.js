// if(true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// // console.log(a);
// // console.log(b);
// console.log(c);  

function one() {
    const username = "SATTWIK"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

// console.log(addOne(5)); // -> 7
function addOne(num) {
  return num + 2;   
}

// console.log(addTwo(5)); // when function declare other variable then  error comes
const addTwo = function(num) {
  return num + 2;   
}

