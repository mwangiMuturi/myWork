var http = require('http');
var url = require('url');
var fs = require('fs');
let path=require('path');
console.log('i am here');


console.log(path.extname(__filename));


const server=http.createServer( function (req, res) {
    var q = url.parse(req.url, true);
  


let filePath=path.join(__dirname,req.url==='/'?'index.html':req.url);

  
    let contentType='text/html';
    let filename = "." + q.pathname;

    
    let extname = path.extname(filename);
 //  console.log(extname);
switch (extname) {



  case '.js':contentType='application/javascript'
        
        break;

    case '.css': contentType = 'text/css'

        break;


    case '.png': contentType = 'image.png'

        break;
//default:contentType='text/html'

  //  break;
    
}

//console.log(extname);
/*

    if (req.url === '/navbars.html') {
        contentType = 'text/html';
    }

    else if (req.url === '/navbar.css') {
        contentType = 'text/css';
    }

    else if (req.url === '/nav.png') {
        contentType = 'image/png';
    }

*/
 

//console.log(q.pathname);

  //  console.log(q.extname);



 // console.log(filename);
    fs.readFile(filePath, function (err, data) {

       if(err){
        if (err.code='ENOENT'){
            console.log('404:FILE NOT FOUND');
            console.log(err.code);
        }

        else{

           console.log('error found...');
           console.log(err.code);
       }}

      res.writeHead(200, { 'Content-Type': contentType });
     //   res.write(data);
        return res.end(data,'utf8');
    });

 


});

const port=process.env.port||8080;

server.listen(port,()=>console.log(`server running on port ${port}`));


