const express = require('express');

// express app 
const app = express();

// register view engine 
app.use('view engine' , 'ejs ')

// listen for requesst 
app.listen(3000);

    // getting response in express 
app.get('/' , (req , res ) => {
    // res.send('home page</p>')
    res.sendFile('/views/index.html' , {root: __dirname}); 
})
app.get('/about' , (req , res ) => {
    // res.send('about page</p>')
    res.sendFile('views/about.html' , {root: __dirname}); 
})

// REDIRECTS IN EXPRESS
app.get('/about-me' , (req , res)=> {
    res.redirect('about')
});

// 404 page  
app.use((req , res) => {
    res.status(400).sendFile('views/404.html' , {root: __dirname})
});
