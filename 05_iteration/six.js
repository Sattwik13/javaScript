const coding = ["js" , "rb", "py", "java", "cpp" ]

const values = coding.forEach((item) => {
//    console.log(item);
   return item
})

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => 
//      num > 4 // -> Implicit return ref 03_basics_arrow.js
//  )

// const newNums = myNums.filter( (num) => 
//     (num > 4) // -> Implicit return ref 03_basics_arrow.js
// )

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

const newNums =[]
myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);