const user =  {
    username : "Sattwik",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.WelcomeMessage();
// user.username = "Manna"
// user.WelcomeMessage();

// console.log(this); // -> only retuen a blank object but when we ran it browser , output --> window

// function chai() {
//     console.log(this);
// }
// chai()

// function chai() {
//     const username = "Sattwik"
//     console.log(this.username);// -> output undefined  -> ***'this' only work in object , under a function 'this' isn't work
// }
// chai()


//+++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++

const chai = () => {
    let username ="SATTWIK"
    console.log(this);// -> return empty object
}
chai()

// const addTwo = (num1, num2) => { // -> num1, num2 is parameter
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2 // -> Implicit return

// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "SATTWIK"})

console.log(addTwo(3,4));