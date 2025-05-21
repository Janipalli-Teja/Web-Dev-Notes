const express=require("express")

const app=express()

app.use((req,res,next)=>{
    console.log("from the middileware");
})

app.get("/teja",(req,res)=>{
    res.send(req.originalUrl);
})

app.listen(3000);