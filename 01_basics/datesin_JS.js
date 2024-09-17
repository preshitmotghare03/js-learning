
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2023, 0, 23, 5, 6)
// console.log(myCreatedDate1.toLocaleString());

 let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() +1 );
// `${newDate.getDay()} and the time is`

newDate.toLocaleDateString('default'{
    weekday: "long"
})


