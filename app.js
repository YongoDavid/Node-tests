const express = require('express');
const morgan = require('morgan');
// connecting to mongoDB using mongoose 
const mongoose = require('mongoose');
// express app 
const app = express();
// importing model 
const Blog = require('./models/blogs');
// const { result } = require('lodash');

// mongodb connect config 
const dbURI = 'mongodb+srv://nodeninja:nodeninja12345@cluster0.zs6k5gt.mongodb.net/'
mongoose.connect(dbURI)
    .then((result)=> app.listen(3000))
    .catch((err) => console.log(err));

// register view engine 
app.set('view engine' , 'ejs');
// MIDDLEWARE & STATIC FILES 
app.use(express.static('public'));
// middleware for form data 
app.use(express.urlencoded({extended: true}));
// logger package 
app.use(morgan('dev'));

// mongoose and mongo sandbox routes 
// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//         title: 'This is a new Blog',
//         snippet: 'A new Blog',
//         body: 'i have a new blog to talk about'
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });
// })

// // to get all the blogs 
// app.get('/all-blogs', (req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });
// })

// // get a single blog 
// app.get('/single-blog' , (req,res)=>{
//     Blog.findById('65c60d9d4a0c70639cbc011f')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     });
// })


// routes 
app.use((req,res,next)=>{
    console.log('Checking routes')
    next();
})

    app.get('/' , (req , res ) => {
    res.redirect('/blogs');
    // using ejs to export coontent dynamically 
    // const blogs = [
    //     {title : 'David finds cars' , snippet: 'lorem i dont know you dont know'},
    //     {title : 'David loves cars' , snippet: 'lorem i dont know you dont know'},
    //     {title : 'David drives cars' , snippet: 'lorem i dont know you dont know'},
    // ];
    // res.render('index' , {title : 'Home page' , blogs}); 
});

app.get('/about' , (req,res)=> {
    res.render('about' , {title : 'About page'})
});

// Blog routes 
app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index' , {title: 'All Blogs' , blogs: result})
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
})
app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id
    Blog.findById(id)
    .then(result =>{
        res.render('details' , {body: result , title: 'Blog  Detials'})
    })
    .catch(err => {
        console.log(err)
    })
})
 
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

