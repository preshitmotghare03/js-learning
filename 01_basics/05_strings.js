const name = "Preshit"
const repoCount = 1
 //console.log(name + repoCount + " Value")

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('Preshit-JS-com')

 //console.log(gameName[0]);
//  console.log(gameName.__proto__);


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "     Preshit      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://preshit.com/hitesh%20motghare"
console.log(url.replace('%20', '-'))

console.log(url.includes("preshit"))

console.log(gameName.split('-'));
