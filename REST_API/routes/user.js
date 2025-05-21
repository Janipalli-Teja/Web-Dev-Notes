const express=require("express");
const router=express.Router();

router.use(express.json());

router.get("/home",(req,res)=>{
    res.render("home",{ name :`${req.path}`});
}) ;


const obj1={
    status:"single",
    relation:"Not interested"
}
router.get("/about",(req,res)=>{
    let obj={
        name:"teja",
        age:43,
        study:"engineering",
        hobbies:["coding","Badminton","Memes","Music"]
    };
    res.render("info" , {obj,obj1});
});

//importing json data 
const data =require("../data.json");

router.get("/frds",(req,res)=>{
    res.render("frds" , {obj:data});
});

module.exports=router;