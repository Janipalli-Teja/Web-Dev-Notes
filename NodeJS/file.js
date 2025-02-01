const file=require("fs");

// synchronus

// file.writeFileSync("demo.txt","this is the file created synchronusly");

// Asynchronus

// file.writeFile("demo.txt","this is asynchronus",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file is created")
//     }
// })

// synchronus
let data=file.readFileSync("./demo.txt","utf-8");
console.log(data)

// Asynchrnous
file.readFile("./demo.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Err ",err)
    }else{
        console.log(result);
    }
});


// synchronus appending into file
file.appendFileSync("./demo.txt",`${Date.now()} this is updated paragraph\n`);

// synchronus copying a file
file.cpSync("./demo.txt","copy.txt");

// synchronus deleting a file
file.unlinkSync("./copy.txt");

// file.mkdirSync("Folderfile")