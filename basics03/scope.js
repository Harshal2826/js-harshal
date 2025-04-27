// Var doesnot works as per blog scope
//var c=150
let a=200
if(true){
    let a=20
    const b=10
    console.log("inner",a);
    
}



console.log(a);
// console.log(b);
//console.log(c);
// here we get the value 10 which should not be there beacuse it is defined in the if scope only right then also we are getting it here which means the var violates the Blog Scope
// scope in the console of the browser is different than the scope in the node files