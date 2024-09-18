const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const DC_heros = ["Flash", "SpuerMan", "Batman"]

// marvel_heros.push(DC_heros)
// console.log(marvel_heros);

// const All_heros = marvel_heros.concat(DC_heros)
// console.log(All_heros);

const all_new_heros = [...marvel_heros,...DC_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [5, 6], 7,[8, 9, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Preshit"));
console.log(Array.from("Preshit"));
console.log(Array.from({Name: "Preshit"})) // Intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

