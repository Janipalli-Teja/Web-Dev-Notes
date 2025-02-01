const map= new Map([[43,'A'],[44,'B'],[45,'A1']])

map.set('T',34)
map.delete(44)
for(const [key,val] of map){
    console.log(`${key} : ${val}`)
}

console.log(map.size)

// it is iterable 
// mutable 
// it is defferent from object 
// In object we can only store strings or symbols in key , but in Maps we can store any datatype in keys 

