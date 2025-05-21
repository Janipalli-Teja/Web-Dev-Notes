const express=require("express");
const mongoose=require("mongoose");

const port=5000; 

//routes import 
const user_router=require("./routes/login");
const details_routes=require("./routes/user");

// instance 
const app=express();

// mongo connection
mongoose.connect("mongodb")
.then(()=>
{console.log("mongoDB conneted ")})
.catch((err)=>{
    console.log("err ", err);
});


app.use(express.json());
// setting server side rendering
app.set("view engine","ejs");

// 
app.use("/api",user_router);

app.use("/my",details_routes);


app.listen(port,()=>{
    console.log(`server started at  http://localhost:${port}`);
});



