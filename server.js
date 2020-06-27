const  htttp=require('http')
const path=require('path')
const fs=require('fs')


const server=htttp.createServer((req,res)=>{

console.log(req.url);

if (req.url=='/'){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<h1>How do you like this?</h1>')
}



});

const port=process.env.PORT||8080;

server.listen(port,()=>console.log(`server running on port ${port}`));