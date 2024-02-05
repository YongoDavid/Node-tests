const http = require('http')
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req , res) => {
    
    // lodash 
    const num = _.random(0,20);
    console.log(num)

    // set content type header 
    res.setHeader('content-Type' , 'text/html')

    // routing to different pages 
    let path = '../part1/'
    switch (req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location' , '/about')
            res.end()
            break;
        default : 
            path += '404.html'
            res.statusCode = 404;
            break;
    };
    
    // send an html file 
    fs.readFile(path , (err , data) => {
        if(err){
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    });
});

server.listen(3000 ,'localhost' , () =>{
    console.log('listening for requests on port 3000')
});

