//Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 34569098765434567876n



//Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "Preshit",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof myFunction);
//+++++++++++++++++++++++++++++++++++++++

let myYoutubename = "PreshitMotgharedotcom"

let anothername= myYoutubename
anothername = "ChaiAurCode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",node 01_basics/05_strings.js
}

let userTwo = userOne

userTwo.email = "preshit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
