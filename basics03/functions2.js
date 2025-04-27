function calculateprice(val1,val2, ...n){
    return n
}

console.log(calculateprice(200,400,500));

const user={
    name:"harshal",
    price:199
}

function handle(any){
    console.log(`username is ${any.name} and price is ${any.price}`);
}

//handle(user)

handle({
    name:"harsh",
    price:200
})