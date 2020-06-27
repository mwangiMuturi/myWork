const file_system=require('fs');
const path= require('path')
const os =require('os');


console.log('ji');



file_system.mkdir(path.join(__dirname, '/test'), {},
    function (err) {

        if (err) {
            console.log('error');
        } else {
            console.log('folder created');
        }

    });


//platform
console.log(os.platform());

//cpu archi
console.log(os.arch());

//cpu core info
//console.log(os.cpus());


//free memeory

console.log(os.freemem());
//total memory
console.log(os.totalmem());

console.log(os.homedir());

console.log(os.uptime());