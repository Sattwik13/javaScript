class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        console.log(`Email is: ${this.email}`);
        
    }
}

const chai = new Teacher("chai", "Chai@teacher.com", "123")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(chai === masalaChai);
console.log(chai instanceof Teacher); // --> teacher is instance of Chai ? true: false
console.log(chai instanceof User); // --> User is instance of Chai ? true: false
