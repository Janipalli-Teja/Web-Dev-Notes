function num(n){
    if(num<2){
        return false;
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i===0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}

console.log(num(5));
console.log(num(2)); // why undefine...

// Big O = O(n)...