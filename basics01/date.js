let mydate=new Date;
console.log(mydate);
console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let d=new Date(2023,1,43)
  let d=new Date("2023-01-31")
// let d=new Date(2023,1,43,5,32)
// console.log(d.toLocaleString())

let myTime=Date.now()
// console.log(myTime)
console.log(d.getTime());
console.log(Math.floor(Date.now()/1000));

let n=new Date()
console.log(n);
console.log(n.getMonth() +1)
console.log(n.getDay());

n.toLocaleString('default',{
    weekday:"long"
})
