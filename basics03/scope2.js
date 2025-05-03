function one(){
    const username="harshal";
    function two(){
        const website="footem"
        console.log(username);
        
    }
    // console.log(website);
     two()
}
// two()
one()

if (true){
    const username="hitesh"
    if(username=="hitesh"){
        const website="youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);
//+++++++++++++ interesting +++++++++++

console.log(addone(5));
function addone(num){
    return num+1
}
console.log(addtwo(5));
//Function Expression
const addtwo=function(num){
    return num+1
}