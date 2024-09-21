//const tinderUser = new Object()

const tinderUser= {}

tinderUser.id = "123abc"
tinderUser.name = "Alex"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const RandomApp = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            Firstname:"Preshit",
            Lastname:"Motghare",
        }
    }
}
//console.log(RandomApp.fullname.userFullname.Lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = {obj , obj2}
//const obj3 =Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: "123",
        mail:"some@gmail.com"
    },
    {
        id: "123",
        mail:"some@gmail.com"
    },
    {
        id: "123",
        mail:"some@gmail.com"
    },
    
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    name:"Javascript",
    price: 999,
    Instructer: "Hitesh"
}

// course.Instructer= "Preshit"
// console.log(course.Instructer);

const{Instructer :Inst}= course
//console.log(Instructer);
console.log(Inst);

{
    "name": "JS-Learning",
    "Price": "free",
    "Instructer": "Hitesh"
}

