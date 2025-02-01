const http=require("http");
let fs=require("fs");
let url=require("url");


let my_server=http.createServer((req,res)=>{
    let address=`${Date.now()} on ${req.url}\n`;
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile("records.txt",address,(err,data)=>{
        switch(myurl.pathname){
            case "/":res.end("this is home page");
            break;
            case "/career":res.end("this is career page");
            break;
            default:res.end("404 server not found");
        }
    }); 
})

my_server.listen(4000,()=>{console.log("server started")});
