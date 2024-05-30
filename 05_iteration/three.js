// for of

// --> for (const iterator of object) {
//   
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4 ,5]

for(const num of arr)  {
    // console.log(num);
}

const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}


// ++++++++++++++++++  Map  ++++++++++++++++++++++++++++++

const map = new Map();
map.set('IN', "Indis")
map.set("USA", "United States Of India")
map.set('Fr', "France")
map.set('In', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key] of map) {
    // console.log(key);
}

for (const [key, value] of map) { // -->destructure
    // console.log(key, `:-`, value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// -> object isn't iterable in for of loop
// for (const [key, value] of myObject) { 
//     console.log(key, `:-`, value); // -> error(object isn't iterable in for of loop)
// }
