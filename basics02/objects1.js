//singleton

//object lietrals

const mysym=Symbol("key1")
const JsUser={
    name:"harshal",
    "full name":"mudgal",
    [mysym]:"mykey1",
    age:20,
    location:"jaipur",
    email:"harshal@gamil.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);
JsUser.email="harshal@yahoo.com";
//Object.freeze(JsUser);
JsUser.email="harshal@nit.com";
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting);
