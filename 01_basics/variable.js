const accountId = 144553
let accountEmail = "Sattwik@google.com"
var accountPassword = "12345" //prefer not use var-- because of issue in block scope and functional scope
accountCity = "jaipur"//without declare variable we can write declare, bUt it's not good pratice
let accountState;// created but value undefined
//accountId = 2 // not allowed for changes beacause const keyword use

accountEmail = "manna@google.com"

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);