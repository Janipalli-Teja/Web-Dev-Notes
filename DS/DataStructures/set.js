// ṭhis is object 

const obj={
    name:"teja",
    age:42,
    "class":"second",
    greet:function(){
        console.log("hello");
    }
}

console.log(obj)


// --->this is set 

const set= new Set([1,2,3,4,5,6])
set.add(7)
for( const i of set){
    console.log(i)

}
console.log(set.has(5))

// no duplicates 
// can contain all data types 
// mutable
// we use Set() conostructor to create a set 


// ---> MAPS 
const map= new Map([[43,'A'],[44,'B'],[45,'A1']])

map.set('T',34)
for(const [key,val] of map){
    console.log(`${key} : ${val}`)
}



// it is iterable 
// mutable 
// it is defferent from object 
// In object we can only store strings or symbols in key , but in Maps we can store any datatype in keys 