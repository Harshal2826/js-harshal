// const tinderUser=new Object()//Singleton object
const tinderUser={}//not a singleton object

tinderUser.id="123abc"
tinderUser.name="harshal"
tinderUser.isLoggedIn=false
console.log(tinderUser)


const regular={
    email:"hasrh@123",
    fullname:{
        userfullname:{
            firsatname:"Harshal",
            lastname:"Mudgal"
        }
    }
}
console.log(regular.fullname);

const obj1={1:'a',5:'b'}
const obj2={2:'b',3:'b'}

//const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Destructuring of objects in JavaScript is a syntax that lets you extract properties from an object and assign them to variables in a clean and readable way.
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"harsh"
}

const {courseInstructor:instructor}=course

console.log(instructor);

//JSON
//one way
// {
//     "name":"mitali",
//     "coursename":"JS",
//     "age":"20"
// }
//another way
// {
//     {},
//     {},
//     {}
// }