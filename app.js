const express = require('express');

// express app 
const app = express();

// register view engine 
app.set('view engine' , 'ejs')

// listen for requesst 
app.listen(3000);

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
    res.status(404).render('404' , {title : "Error page"})
}); 

