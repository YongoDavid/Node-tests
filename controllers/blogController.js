// ALL VARIABLES FOR ROUTE FUNCTIONS WILL STAY HERE 
// importing model 
const Blog = require('../models/blogs');
const blog_index = (req,res) =>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index' , {title: 'All Blogs' , blogs: result})
    })
    .catch((err)=>{
        console.log(err);
    })
};

// get a particular blog by its id 
const blog_detials = (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result =>{
        // render the file you want your selected id results to appear in 
        res.render('details' , {blog: result , title: 'Blog  Detials'})
    })
    .catch(err => {
        res.status(404).render('404' , {title: 'Blog not found'})
    })
};

const blog_create_get = (req,res) =>{
    res.render('create' , {title: 'Create a new blog'})
};
// creating a new instance for new data and saving to database 
const blog_create_post = (req,res) =>{
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
};
// deletle a particular blog by its id 
const blog_delete = (req,res) =>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    // after the delete is complete we sent a json and redirect the json 
    .then(result =>{
        res.json({ redirect: '/blogs'})
    })
    .catch((err)=>{
        console.log(err)
    })
};

module.exports ={
    blog_index,
    blog_detials,
    blog_create_get,
    blog_create_post,
    blog_delete
}