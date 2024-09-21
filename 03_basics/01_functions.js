
function SayMyName(){
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}
//SayMyName()

// function addNumbers(number1, number2){
//     console.log(number1+number2);
    
// }
function addNumbers(number1, number2){
    // console.log("Preshit");
    // let result = number1+number2
    return number1+number2
    
}
//addNumbers(3,"4")
let result = addNumbers(3,4)
//console.log("Result:",result);

function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter the Username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());

function CalculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(CalculateCartPrice(200, 300, 400, 5000));
const user ={
    username: "Preshit",
    price: 199,
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and the price paid is ${anyobject.price}`);
    
}
//handleObjects(user)
// //handleObjects({
//     username: "Sam",
//     price: 599
// })

const myNewArray =[100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
