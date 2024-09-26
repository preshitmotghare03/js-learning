//for
 
for (let i = 0; i<= 10; i++) {
    const element = i;
    if(element==5){
       // console.log("5 is the best Number");
        
    }
    //console.log(element);
    
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop Value ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`Inner Loop Value ${j} and outer loop value is${i}`);
//         console.log(i+'*'+j+'='+i*j);
        
//     }
    
// }

// let myArr=["Flash", "Batman", "Superman"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`5 is detected`); 
        break
    }
    console.log(`Value of i is ${index}`);
}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`5 is detected`); 
        continue
    }
    console.log(`Value of i is ${index}`);
}