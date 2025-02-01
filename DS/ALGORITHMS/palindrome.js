let num=121;

let palindrome=function (x){
    return x<0? false:x=== +x.toString().split("").reverse().join("");
};

console.log(palindrome(121))