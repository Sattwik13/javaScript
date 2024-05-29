

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
      console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Sattwik = function() {
    console.log(`Sattwik is present in all objects`);
}

Array.prototype.heySattwik = function() {
    console.log(`Sattwik says hello`);
}
heroPower.getSpiderPower();
heroPower.Sattwik()

myHeros.Sattwik();
myHeros.heySattwik();

// +++++++++++++ Inheritance ++++++++++++++

const User = {
    name: "chai",
    email: "Chai@google.com"
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: 'JS  assignment',
    fullTime: true,
    __proto__: TeachingSupport
} 

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let  anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function() { // TrueLenth is user defined Function
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"Sattwik".trueLength() // Custom  Input
"iceTea".trueLength() // Custom Input
