"use strict" ; //treat all JS code as newer versions

//alert(3+3) // We are using nodejs , not browser 
let name = "Harsh"
let age = 18
let isLoggedIn = true

//undefined => 
//symbol => unique

// NULL is a standalone value   eg if temp is coming from API 0 , 0 is a temperature thats why we show NULL , it states that the temp isn't received.

console.log(typeof null); //it is a object 
console.log(typeof undefined);










//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
