
//var c=300
let a=100
if(true){
    let a=10
    const b=20
   // console.log("INNER:", a);
    
}
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(a);

function one(){
    const username="Preshit"
    function two(){
        const website="Youtube"
        console.log(username);
        
    }
   // console.log(website);
    
    two()
}
//one()

if(true){
    const username="Preshit"
    if(username=="Preshit"){
        const website =" youtube"
       // console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//+++++++++++++++++Intresting+++++++++++++++++=

console.log(addOne(4));
 addOne(4)
function addOne(num) {
    return num + 1
}

console.log(addTwo(4));

const addTwo = function (num) {
    return num + 2
}
