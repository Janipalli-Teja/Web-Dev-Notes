
// without arrow function
let p = new Promise(function(resolve, reject) {
    let num = 5;
    console.log(typeof resolve,typeof reject);
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

