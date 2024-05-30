// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "somgoggle@gmail.com",
    fullName: {
        firstName: "Sattwik",
        lastName: "Manna"
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign(obj1, obj2, obj3);
// const obj4 = Object.assign({}, obj1, obj2, obj3); // ->object concatination
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "SATTWIK"
}

console.log(course.courseInstructor);
console.log(course.price);

const {courseInstructor, price} = course
console.log(courseInstructor, price);

const {courseInstructor: instructor} = course
console.log(instructor);

// json format-->
// {
//     "name": "SATTWIK",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// or,
// [
//   {},
//   {},
//   {}      
// ]
