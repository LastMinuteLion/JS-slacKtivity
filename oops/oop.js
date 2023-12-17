const user = {
    username: "jELLLYY",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(`Username: ${username}`);  // THIS USERNAME WILL NOT BE PRINTED BECAUSE NO CONTEXT  , THIS FUNC DOESNT KNOW 
        // YOU HAVE TO GO OUTSIDE TO GET THE USERNAME .
        console.log(this);
    }

}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);




// THIS IS USED TO KNOW THE CURRENT CONTEXT . 
//global context of this is {} // THIS IS NODE OBJECT 

//but if on browser it will behave differently.







function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//agar NEW nhi use karenge toh userTwo ki values saari overwrite hojayegi userOne mein  ,  islia new is used for new Instance.

// 1-> new object create hota hai 
// 2-> constructor func call hota hai new keyword ki wjh se 
// 3-> object create hojayenge.