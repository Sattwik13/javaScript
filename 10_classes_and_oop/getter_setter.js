class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    // get password() {
    //     return this._password.toUpperCase()
    // }
     
    get password() {
        return `${this._password} Sattwik` // -> Custom value Set
    }

    get email() {
        return this._email.toUpperCase()
    }

    // set password(val) {
    //     this._password = val.toUpperCase()
    // }

    set password(val) {
        this._password = val
    }

    set email(val) {
        this._email = val
    }
}

// const Sattwik = new User("Google@gmail.com", "123")
const Sattwik = new User("Google@gmail.com", "abc")

// console.log(Sattwik.password);
console.log(Sattwik.email);
