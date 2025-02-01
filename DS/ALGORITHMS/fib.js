function fib(n){
    const arr=[0,1]
    for(let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}

console.log(fib(0));
console.log(fib(8));

// Big O = O(n) --- since there is one loop





// using recurrsion

function fib1(n){
    if(n>1){
        return fib(n-1)+fib(n-2)
    }
    else{
        return 1;
    }
}


function get_fib(n){
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(fib1(i))
    }
    return arr;
}

console.log(get_fib(5));

// for this Big O = O(2^n) -- which is teribble..    