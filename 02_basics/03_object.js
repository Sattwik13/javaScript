//singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "SATTWIK",
    "fullName": "SATTWIK MANNA",
    [mySym]: "mykey1", //-> ** symbol  initialize under []
    age: 20,
    location: "kharagpur",
    Email: "Sattwik@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser);
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);

// console.log(JsUser.fullName);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]); // ->** symbol output

JsUser.Email = "Manna@google.com"
// Object.freeze(JsUser);//when frezze whole object
// Object.freeze(JsUser.Email); // when want to freeze a particular object 

JsUser.greeting = function() {
    console.log("HEllo Js user");
}

JsUser.greetingTwo = function() {
    console.log(`HEllo Js user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());