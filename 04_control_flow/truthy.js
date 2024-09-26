const userEmail = "preshit@ai"

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Did not got User Email");
    
}
const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
}

//Nullish coalescing operator (??): null Undefined

let val1;
//val1=5??10
//val1= null??10
//val1=undefined ?? 10
val1=undefined??10??20
console.log(val1);

//Ternairy operator
//condition?true : false

const TeaPrice = 100
TeaPrice<=80?console.log("Less than 80") :console.log("More than 80");

