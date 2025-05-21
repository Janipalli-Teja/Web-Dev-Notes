const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.end("this is server");
})
app.get("/1",(req,res)=>{
    res.send("this is server 1");
})
app.get("/2",(req,res)=>{
    res.send({msg:"this is message from server"});
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on local machine');
});
// app.use(express.urlencoded({extended : false}));  -doubt..
// app.use(express.urlencoded({extended : false}));  -doubt..
// app.use(express.urlencoded({extended : false}));  -doubt..
// app.use(express.urlencoded({extended : false}));  -doubt..