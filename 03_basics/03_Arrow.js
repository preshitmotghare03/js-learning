const user={
    username:"Preshit",
    Price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// function chai() {
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username="Preshit"
//     console.log(this.username);
    
// }
// chai()
const chai =  ()=> {
    let username="Preshit"
    console.log(this.username);
    
}
//chai()
//const addTwo = (num1, num2)=> (num1 + num2)
const addTwo = (num1, num2)=> ({username:"Preshit"})

console.log(addTwo(4 , 7));
