const myDate = new Date();
// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);// -> object type

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0 , 23, 5, 3);
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023");
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now()/1000)); // conert milisecond to second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);

newDate.toLocaleString('default', {
    weekDay: "long"
})