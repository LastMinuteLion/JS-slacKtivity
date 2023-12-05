//singleton
//Object.create//singleton constructor se banta hai


//OBJECT LITERALS

const mySym = Symbol("key1")

const jsUser = {
    name:"Jelly",
    "full name": "Harsh  Vardhan",
    [mySym] : "mykey1",
    age:20 ,
    email: "harsh@ejfnn.com",
    location:"Chandigarh",
    isLoggedIn: false
}
jsUser.name = "Fayee"
console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"]); //this is why square bracket access is important.
console.log(jsUser[mySym]);// syntax of symbol is different . 


// Object.freeze(JsUser) freezes the value


jsUser.greeting = function(){
    console.log("Hello JS user" + jsUser.name);
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting);//gretting function ka reference aaya hai .whne without()
console.log(jsUser.greeting()); //func executed
console.log(jsUser.greetingTwo());



