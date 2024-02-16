const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        // setting the time of data we want from each property to be 
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    // timestamp as an options object 
}, {timestamps: true});

// This is how you create your model around the schema 
const Blog = mongoose.model('Blog' , blogSchema)
// Export the model to be able to use anyhere is your code 
module.exports = Blog;