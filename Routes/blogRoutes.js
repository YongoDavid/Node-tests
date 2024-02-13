const express = require('express')
// importing model 
const Blog = require('../models/blogs');
const router = express.Router()


// Blog routes 


router.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index' , {title: 'All Blogs' , blogs: result})
    })
    .catch((err)=>{
        console.log(err);
    })
})
// creating a new instance for new data and saving to database 
router.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.get('/blogs/create' , (req , res)=> {
    res.render('create' , {title: 'Creat a new blog'})
}); 
// get a particular blog by its id
router.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result =>{
        // render the file you want your selected id results to appear in 
        res.render('details' , {blog: result , title: 'Blog  Detials'})
    })
    .catch(err => {
        console.log(err)
    })
})
// deletle a particular blog by its id 
router.delete('/blogs/:id' , (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    // after the delete is complete we sent a json and redirect the json 
    .then(result =>{
        res.json({ redirect: '/blogs'})
    })
    .catch((err)=>{
        console.log(err)
    })
})
 
module.exports = router