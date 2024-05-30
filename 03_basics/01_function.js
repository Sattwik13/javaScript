function sayMyName() {
console.log("S");
console.log("A");
console.log("T");
console.log("T");
console.log("W");
console.log("I");
console.log("K");
}

// console.log(sayMyName);// output only reference
// console.log(sayMyName());// output function

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(2 , 2);

function addTwoNumbers(number1, number2) {

        // let result = console.log(number1 + number2);
        // return result;
        return number1 + number2;
    }
const ans = addTwoNumbers(3, 5);

// console.log("Answer: ", ans);    
// console.log(`Answer:  ${ans}`);    


// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username) {
//     if(!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username = "sam") {
//     if(username === undefined) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("SATTWIK"));
// console.log(loginUserMessage());


// function calculateCartPrice(num1) {
//     return  num1;
// }
// console.log(calculateCartPrice(2));

// function calculateCartPrice(...num1) {
//     return  num1;
// }
// console.log(calculateCartPrice(100,101,102));

// function calculateCartPrice(val1, val2, ...num1) {
//     return  num1;
// }
// console.log(calculateCartPrice(100, 101, 102, 103));


const user = {
    username: "Sattwik",
    price: 199
}

function handleObject(anyObject) {
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "SAM",
    price: 100
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1];
}

// console.log(returnSecondvalue(myNewArray));
// console.log(returnSecondvalue([100, 101, 102, 103]));
