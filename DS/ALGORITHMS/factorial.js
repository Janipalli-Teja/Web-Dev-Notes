function fact(n){
    let result=1;
    if(n>1){

        for(let i=1;i<=n;i++){
            result*=i;
        }
        return result;
    }
    else{
        return 1;
    }
}
console.log(fact(5));
console.log(fact(0));

// Big O = O(n) --- since there is one loop


// using recursion 
function fact1(n){
    if(n==0){
        return 1
    }
    else{
        return n*fact1(n-1);
    }
}
console.log(fact1(6));


// Big O = O(n) 