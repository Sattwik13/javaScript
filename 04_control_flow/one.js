// if

if(2 === 2) {
    console.log("executed");

}

let ValidDebitCard = true;
let googleLoggedIn = true;
let gmailLoggedIn = false;

if(ValidDebitCard || googleLoggedIn)
 {
    console.log(`Add to cart and Buy`);
 }   

if( googleLoggedIn || gmailLoggedIn)
 {
    console.log(`User logged In`);
 }

 if( googleLoggedIn && gmailLoggedIn)
   {
      console.log(`User logged In`);
   }