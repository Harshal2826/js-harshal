function saymyname(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

// saymyname()

// function add(n1,n2/*parameters*/){
//     console.log(n1+n2);
    
// }

function add(n1,n2){
    //let result=n1+n2
    //return result
    return n1+n2
}

const result=add(3,4);
console.log("result:",result);

//add(3,"4"/*arguements*/)

function login(username="mits"){

    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(login("harsh"));
console.log(login(""));