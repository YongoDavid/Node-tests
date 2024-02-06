const express = require('express');

// express app 
const app = express();

// listen for requesst 
app.listen(3000);

    // getting response in express 
app.get('/' , (req , res ) => {
    // res.send('home page</p>')
    res.sendFile('./index.html' , {root: __dirname}); 
})
app.get('/about' , (req , res ) => {
    // res.send('about page</p>')
    res.sendFile('./about.html' , {root: __dirname}); 
})

// REDIRECTS IN EXPRESS
app.get('/about' , (req , res)=> {
    res.redirect('about-me')
});

// 404 page  
app.use((req , res) => {
    res.sendFile('../part2/404.html' , {root: __dirname})
});
