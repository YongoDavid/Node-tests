const express = require('express');
const morgan = require('morgan');
// connecting to mongoDB using mongoose 
const mongoose = require('mongoose');
// express app 
const app = express();

// mongodb connect config 
const dbURI = 'mongodb+srv://nodeninja:nodeninja12345@cluster0.zs6k5gt.mongodb.net/'
mongoose.connect(dbURI)
    .then((result)=> app.listen(3000))
    .then((err) => console.log(err));

// register view engine 
app.set('view engine' , 'ejs');

// MIDDLEWARE & STATIC FILES 
app.use(express.static('public'));


// MIDDLEARES 

// app.use((req,res , next)=> {
//     console.log('new request made');
//     console.log('host: ' , req.hostname);
//     console.log('path:' , req.path);
//     console.log('method:' , req.method);
//     next();
// });
// app.use((req,res , next)=> {
//     console.log('in the next middleware');
//     next();
// });

    // getting response in express 
app.use(morgan('dev'));

app.use((req,res,next)=>{
    console.log('Checkking routes');
    next();
})

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

