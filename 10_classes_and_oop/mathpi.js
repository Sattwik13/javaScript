// Object.getOwnPropertyDescriptor(Math)

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);// ->output -> {
//                                         value: 3.141592653589793,
//                                         writable: false,
//                                         enumerable: false,
//                                         configurable: false
//                                        }


// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', { 
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)) { // -> Object.entries
    if(typeof  value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}