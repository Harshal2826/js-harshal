//for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}

for (let index = 1; index < 10; index++) {
    console.log(`value of index is ${index}`);
    if(index==5){
        console.log(`Detected index number ${index}`);
        
        break;
    }
}