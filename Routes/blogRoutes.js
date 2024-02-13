const express = require('express')
const blogController = require('../controllers/blogController')
const router = express.Router(); 
// Blog routes 
router.get('/blogs', blogController.blog_index);
router.post('/blogs', blogController.blog_create_post)
router.get('/blogs/create' , blogController.blog_create_get); 
router.get('/blogs/:id', blogController.blog_detials);
router.delete('/blogs/:id' , blogController.blog_delete )
 
module.exports = router