function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username)// this is parameter that
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@google.com", "123")
console.log((chai));