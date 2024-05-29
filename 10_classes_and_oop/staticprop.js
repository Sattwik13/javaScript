class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const Sattwik = new User("Sattwik")
console.log(Sattwik.createId()); // -> Eroor beacause createId is 'static' , child can't share createId


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // -> Error, 'static' can't access inherited classes also