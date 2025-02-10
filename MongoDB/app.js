const express=require("express");
const mongoose=require("mongoose");

const app=express();

app.use(express.json())


// connecting mongo server 
mongoose.connect("mongodb://localhost:27017/practiceDB")
.then(()=>{
    console.log("mongodb connected");
}).catch((err) =>{
    console.log("error occured during mongodb connection",err);
});



// defining schema 
const Userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type: String,
        required:true,
    }
})

//creating model from schema
const model=new mongoose.model("User",Userschema);

app.post("/user",async(req,res)=>{
    const body=req.body;
    if(!body || !body.name || !body.age){
        return res.status(400).json({msg:"All fields should be filled"});
    }
    try {
        const entry = await model.create({ //  Changed `Userschema.create()` to `model.create()`
            name: body.name,
            age: body.age
        });

        console.log(entry);

        return res.status(201).json({ msg: "success" });

    } catch (err) {
        console.error("Error occurred:", err);
        return res.status(500).json({ msg: "Server Error" });
    }

})

app.listen(5000,()=>{
    console.log("server is hosting");
})