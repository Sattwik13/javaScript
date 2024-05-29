const User = {
    _email: "Manna@hs.com",
    _password: "abc",
    
    get email() {
        return this._email.toUpperCase()
    },

    set email(val) {
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email); // -> instead of Using _email , we can use email beacuse
// -> 9:35:05