const score=400
// console.log(score);

const bal=new Number(10)
// console.log(bal);

// console.log(bal.toString());
// console.log(bal.toString().length);
// console.log(bal.toFixed(2));

const h=100000
console.log(h.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++

console.log(Math);
console.log(Math.abs(-44));
console.log(Math.round(5.32));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random())*10)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)