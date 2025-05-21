const mongoose=require("mongoose");

const mongo_schema1= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const mongo_schema2= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const login_model=mongoose.model("login_details",mongo_schema1);
const signup_model=mongoose.model("signup_details",mongo_schema2);

module.exports={login_model,signup_model};