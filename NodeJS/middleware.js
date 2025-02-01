const express=require("express");

const app=express();

app.use((req,res,next)=>{
    console.log("this is from middile ware function");
    next();
});

app.get("/",(req,res)=>{
    res.send("this is get function");
});

app.listen(3000);