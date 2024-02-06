const express = require('express');

// express app 
const app = express();

// register view engine 
app.set('view engine' , 'ejs')

// listen for requesst 
app.listen(3000);

    // getting response in express 
app.get('/' , (req , res ) => {
    // res.send('home page</p>')
    res.render('index'); 
});
app.get('/about' , (req,res)=> {
    res.render('about')
});
app.get('/blogs/create' , (req , res)=> {
    res.render('create')
}); 
// // redirects 
// app.get('/about-us' , (req,res)=>{
//     res.redirect('about')
// }); 
app.use((req,res)=>{
    res.status(404).render('404')
}); 

