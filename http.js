const url=require('url');


const htttp=require('http');

htttp.createServer((req,res)=>{

    res.write('hello world')
    res.end()
    
}).listen(8080,()=>console.log('server running...'));