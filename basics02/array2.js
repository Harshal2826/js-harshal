const marvel=["hulk","drstrange","blackwidow"]
const dc=["batman","xmen","flash"]

// marvel.push(dc)
// console.log(marvel);

const heros=marvel.concat(dc)

console.log(heros)

const all=[...marvel,...dc]
console.log(all);


const Arr=[1,2,3,[4,5,8],[3,[5,9,0]]]
const real=Arr.flat(Infinity)
console.log(real);


console.log(Array.isArray("harshal"));
console.log(Array.from("harshal"));
console.log(Array.from({name:"harshal"}));//interesting case

let s1=100
let s2=120
let s3=140

console.log(Array.of(s1,s2,s3));