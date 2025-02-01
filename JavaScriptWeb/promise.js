// with arrow function
let p=new Promise((resolve,reject)=>{
    let num=5;
    if(num==5){
        resolve("success");
    }
    else{
        reject("failed");
    }
});

p.then((message)=>{
    console.log("in then :"+message);
}).catch((message)=>{
    console.log("in catch : "+message);
});

// without arrow function
let p = new Promise(function(resolve, reject) {
    let num = 5;
    if (num === 5) {
        resolve("success");
    } else {
        reject("failed");
    }
});

// Usage
p.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});

