const mongoose = require('mongoose')

const Blogs = new mongoose.Schema(
    {
        image: {
            type: "string", 
            required: true, 
        },
        titleUz: {
            type: "string", 
            required: true, 
        },
        titleEng: {
            type: "string", 
            required: true, 
        },
        descrUz: {
            type: "string", 
            required: true,
        },
        descrEng: {
            type: "string", 
            required: true,
        },
        author: {
            type: "string", 
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now()
        } 
    }
)

module.exports = mongoose.model('Blogs', Blogs)