// JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth

// sytax 
// let arrayName = [value1, value2, ...]; 

//    using array constructor...
// let arrayName = new Array(); 

// arrays are mutable...


// loops in arrays  
// 1) For loop

arr=[85,97,44,37,76,60];
temp=0;
for(i=0;i<arr.length;i++){
    temp+=arr[i];
    console.log("array item : ",arr[i]);
}
average=temp/arr.length;
console.log("average ",average);

// 2) For of

arr=[85,97,44,37,76,60];
temp=0;
for(let i of arr){
    temp+=i;
    console.log("array item : ",i);
}
average=temp/arr.length;
console.log("average ",average);



// examples...
arr=[250,645,300,900,50];
index=0;
for(let val of arr){
    console.log(`the array index is ${index} is ${val}`);
    let dis=val/10;
    arr[index]=arr[index]-dis;
    console.log(`value after offer ${arr[index]}`);
    index++;
}
console.log(arr);


// methods in array........

// 1) Push
let arr=[250,645,300,900,50];
arr.push(43); // single item
console.log(arr);
arr.push(43,76); // multiple item
console.log(arr);

// 2)Pop 
// methods in array........

// 1) Push
let arr2=[250,645,300,900,50];
arr2.pop(); // single item
console.log(arr2);


// 3) toString
let arr3=[250,645,300,900,50];
arr3.toString(); // single item
console.log(arr3);

// 4) concat 
// syntax 
// concatinate_arr=arr1.concat(arr2); 

// 5) unshift -- this add the element at begining

// 6) shift -- removes the element at begining..

// 7) Slice -   this returns the item from res-start to res-end items

// 8) Splice - changes original array by (add,remove,replace)
// syntax - splice (index,no_elements_to_delete,elements_to_add,,,,)
let arr5 =[11,22,33,44,55];
arr5.splice(2,2,66,77);
console.log(arr5); 


