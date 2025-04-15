const arr=[0,2,4,5]

const arr2=new Array('A','B','C')
console.log(arr2[2])

//Array Methods

arr2.push(3)

// arr2.unshift(2)
// arr2.shift()
// console.log(arr2)

const a=arr2.join();
// console.log(arr2);
// console.log(a)
// console.log(typeof a)

const n1=arr2.slice(1,3);

console.log(n1);
console.log("a",arr2);


const n2=arr2.splice(1,3)
console.log(n2);
console.log("b",arr2);
