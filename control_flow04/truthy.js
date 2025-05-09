// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator(??): null undefined 
// The nullish coalescing operator (??) is a JavaScript operator that returns the right-hand side value only if the left-hand side is null or undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

//Terniary operator

//condition ? true :false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")