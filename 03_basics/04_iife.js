//Immediatly Invoked Function Expressions (IIFE)

(function one(){
    console.log(`DB Connected`);
    
})();

((name)=>{
    console.log(`DB Connected Two ${name}`); 
})('Preshit')