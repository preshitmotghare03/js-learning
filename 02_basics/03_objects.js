// singleton

//object literals
const mySym = Symbol("key1")

const JsUser ={
    name:"Preshit",
    "Full_Name":"Preshit Motghare",
    [mySym]: "Mykey1",
    Age:20,
    location: "Pune",
    email: "preshit@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Saturday", "Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full_Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "preshit@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "preshit@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


