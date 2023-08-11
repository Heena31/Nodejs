// How to Create Server

// 1. Require the http module 

const http = require("http");

// 2. Create a Server using Method Create server
const server=http.createServer((req,res)=>{

console.log(req.url);
if(req.url=="/user")
{
    res.end("This is User Page");
}
else if(req.url=="/product")
{
    res.end("This is Product page");
}


    res.end("Welcome, This is your first NodeJS Server");
});

//3. Create a port to Start Server

server.listen(8080, () =>{
    console.log("Server is Running on port : 8080");
})