const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currvalue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0) //-> 0 is staring value

const mytotal = myNums.reduce((acc, curVal) => acc+curVal, 0) 

// console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "c++ course",
        price: 3499
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "DSA course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, item) => (accumulator + item.price), 0)

console.log(priceToPay);