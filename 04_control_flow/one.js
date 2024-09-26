//if

// const temperature = 25
// if(temperature < 50){
//     console.log("Temperature less than 50");
    
// }
// else{
//     console.log("Temperature greater than 50");
    
// }
// console.log("Executed");


// const score= 200
// if(score>100){
//     let power="fly"
//     console.log(`User Power ${power}`);
    
// }
// console.log(`User Power ${power}`);

//let balance = 1000

//if(balance>500) console.log("Test"),console.log("Test2");(NOT A GOOD PRACTISE)

const IsUserLoggedIn=true
const HaveDebitCard=true

const loggedinFromEmail = true
const loggedinFromGoogle= false

if(IsUserLoggedIn && HaveDebitCard && 7==6){
    console.log("Allowed To Buy The course");
}

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("User Logged In");
    
}