const express=require("express");

const app=express()

app.get("/",(req,res)=>{
    return res.send("Hi Guys...");
})
app.post("/home",(req,res)=>{    // gets cant connect to ....
    return res.send("got a post request in home page");
})
app.get("/feedback",(req,res)=>{
    return res.send("this is feedback page");
})
app.listen(3000,()=>{
    console.log("server running");
});