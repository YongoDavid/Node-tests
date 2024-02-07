const express = require('express');

// express app 
const app = express();

// register view engine 
app.set('view engine' , 'ejs')

// listen for requesst 
app.listen(3000);

// MIDDLEARES 
app.use((req,res , next)=> {
    console.log('new request made');
    console.log('host: ' , req.hostname);
    console.log('path:' , req.path);
    console.log('method:' , req.method);
    next();
});
app.use((req,res , next)=> {
    console.log('in the next middleware');
    next();
});

    // getting response in express 
app.get('/' , (req , res ) => {

    // using ejs to export coontent dynamically 
    const blogs = [
        {title : 'David finds cars' , snippet: 'lorem i dont know you dont know'},
        {title : 'David loves cars' , snippet: 'lorem i dont know you dont know'},
        {title : 'David drives cars' , snippet: 'lorem i dont know you dont know'},
    ];
    res.render('index' , {title : 'Home page' , blogs}); 
});
app.get('/about' , (req,res)=> {
    res.render('about' , {title : 'About page'})
});
app.get('/blogs/create' , (req , res)=> {
    res.render('create' , {title: 'Creat a new blog'})
}); 
// // redirects 
// app.get('/about-us' , (req,res)=>{
//     res.redirect('about')
// }); 
app.use((req,res)=>{
    res.status(404).render('404' , {title : "Error"})
}); 

