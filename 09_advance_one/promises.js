// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography,  network
//     setTimeout(function() {
//         console.log('Async task is complete');
//      // resolve() // -> resolve connection with then
//     }, 1000)
// })

// promiseOne.then(function() {
//     console.log("Promise consumed");
// })


// --> WithOut take any const
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function() {
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//     resolve({username: "Chai", email:"chai@example.com"})
//     } , 1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })


// using .then & .catch & .finally
// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false // or, try true
//         if(!error) {
//             resolve({username: "SATTWIK", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     } , 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// }).then((Username) => {
//     console.log(Username);
// }).catch(function(err) {
//     console.log(err);
// }).finally(() => console.log(`The promise is either resolved or rejected`))


// Using try-catch block & promiseFour same work done with other way
// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true; // try false
//         if(!error) {
//             resolve({username:"javascript",  password: "123"})
//         } else {
//             reject(`ERROR: JS went wrong`)
//         }
//     } , 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => {
//     return res.json()
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })