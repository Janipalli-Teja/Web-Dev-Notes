function power2(n){
    let res=1;
    for(let i=1;i<n;i++){
        res*=2;
        if(res===n){
            return i;
            break;
        }
    }
    return false;
    
}
let num=128;
if(power2(num)){

    console.log(`the given number can be return in form of 2*${power2(num)}`);
}
else{
    console.log("cannot be written");
}

// Big O = O(n)...